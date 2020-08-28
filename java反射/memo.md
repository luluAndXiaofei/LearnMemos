[视频地址](https://www.imooc.com/video/3733)

## lesson1 关于Class类
- 在java中，万事万物皆对象
- 类也是对象，类是java.lang.Class类的实例对象
- 任何一个类都是Class类的实例对象，这个实例对象有三种表达方式
1. 类名.class
实际在告诉我们任何一个类都有一个隐含的静态成员变量class。
```java
Class c1 = Foo.class;
```

2. 实例.getClass()
```java
Foo foo1 = new Foo();
Class c2 = foo1.getClass();
```

- c1,c2表示了Foo类的类类型

3. Class.forName(类全名);
```java
Class c3 = null;
try {
    c3 = Class.forName("com.imooc.reflect.Foo");
} catch(ClassNotFoundException e) {

}
```

- 我们可以通过Class实例创建该类的实例
```java
Foo foo = (Foo)c1.newInstance();
```

## lesson2 静态加载 vs 动态加载
- 编译时刻加载类是静态加载类，运行时刻加载类是动态加载类
- new对象是静态加载类，在编译时刻就需要加载所有的可能使用到的类。如下，假设Word类存在，而Excel类不存在时，因为静态加载导致编译时刻就出错，Word类也用不了。

```java
if ("Word".equals(args[0])) {
    Word w = new Word();
    w.start();
}
if ("Excel".equals(args[0])) {
    Excel e = new Excel();
    e.start();
}
```

如果希望用哪个就加载哪个，则必须**运行时加载类**。
```java
// 动态加载类，在运行时刻加载(即便传来Word或者Excel以外的类，编译时刻并不会出错，运行时才出错提示没有该类)
Class c = Class.forName(args[0]);
// 通过类类型创建该类对象
OfficeAble oa = (Office)c.newInstance();
```

## lesson3 获取方法信息
- int,String等基本类型也是对象，也有自己的类类型。甚至void关键字也有类类型
```java
Class c1 = int.class;
Class c2 = String.class;
Class c3 = double.class;
Class c4 = Double.class;
Class c5 = void.class;

System.out.print(c1.getName());// int
System.out.print(c2.getName());// java.lang.String
System.out.print(c2.getSimpleName()); // 不包含包名 String
```
- 获取类的名称
使用getName()
```java
Class c = obj.getClass();
c.getName(); // 类的名称
```

- 获取方法
使用getMethods()。获取的是所有的public的函数，包括父类继承而来的。
```java
Method[] ms = c.getMethods();
```
使用getDeclaredMethods()。获取的是所有的自己声明的方法，包括private。
```java
Method[] ms = c.getDecalreMethods();
```
Method类可以获取返回值跟参数的类类型
```java
Class returnType = someMethod.getReturnType();
```
```java
Class[] paramTypes = someMethod.getParameterTypes();
```

## lesson4 获取成员变量的信息,获取构造方法的信息
- 成员变量也是对象。java.lang.reflect.Filed类封装了成员变量的操作。
getFields()方法获取的所有public的成员变量信息。getDeclaredFilds()是获取该类自己声明的成员变量的信息。可以是private，也可以是public。
```java
Filed[] fs = c.getFields();
```
getType()是获取成员变量的类类型。
```java
Class fieldType = field.getType();
```
getName()获取成员变量的名称
```java
fieldType.getName();
```
- 构造方法也是对象。java.lang.Constructor封装了构造函数的信息。
getConstructors封装了所有共有的构造方法。
```java
Class c = obj.getClass();
Constuctor[] cs = c.getConstructors();
```
getDecaredConstructors封装了所有自己声明的构造方法。
```java
Class c = obj.getClass();
Constuctor[] cs = c.getDeclaredConstructors();
```
获取构造函数的的参数列表。getParameterTypes()
```java
Class[] paramTypes = constructor.getParameterTypes();
```

## lesson5 方法反射的基本操作
- 如何获取某个方法
方法的名称和方法的参数列表才能唯一决定某个方法

```java
class A {
    public void print(int a, int b) {
        System.out.println(a + b);
    }

    public void print(String a, String b) {
        System.out.println(a.toUpperCase() + "," + b.toLowerCase());
    }
}

public void main(String[] args) {
    A a1 = new A();
    Class c = a1.getClass();
    try {
        Method m = c.getMethod("print", int.class, int.class);
        // Method m = c.getMethod("print", new Class[]{int.class, int.class});
        // 方法的反射操作
        // 方法如果没有返回值返回null，有返回值返回具体的返回值
        // Object o = m.invoke(a1, new Object[]{10 ,20});
        Object o = m.invoke(a1, 10, 20);

        Method m1 = c.getMethod("print", String.class, String.class);
        Object o1 = m1.invoke(a1, "hello", "WORLD");
    } catch(Exception e) {
        // 运行时可能找不到方法
    }

}

```

- 方法反射的操作
```java
method.invoke(参数)
```

## lesson6 通过反射了解集合泛型的本质
- 反射的操作都是编译之后的操作！！变成字节码(.class)之后的操作。在运行时的操作。
```java
public void main(String[] args) {
    ArrayList list = new ArrayList();
    ArrayList<String> list1 = new ArrayList<String>();
    list1.add("hello");
    // list1.add(20); 错误的

    Class c1 = list.getClass();
    Class c2 = list1.getClass();
    System.out.println(c1 == c2); 
    /** 
     *   true。说明编译之后集合的泛型是去泛型化的。Java中集合的泛型，是防止错误输入的，只是
     *   在编译阶段有效，绕过编译就无效了。
    **/

    // 验证：我们可以通过方法的反射来操作，绕过编译
    try {
        Method m = c1.getMethod("add", Object.class);
        m.invoke(list1, 20);
        System.out.println(list1); // 20加进去了！！
        for (String string : list1) {
            System.out.println(string); // 现在不能这样编译
        }
    } catch(Exception e) {

    }
    
}
```
