# 如何开发django程序
[参考url](https://www.django.cn/course/show-8.html)
### 1. 安装virtualenv
```shell
pip install virtualenv
```
创建虚拟环境。则在当前目录下生成pyweb文件夹。
```
virtualenv pyweb 
```
进入虚拟环境。
```
cd bin
source activate
```

### 2. 安装django
以下操作都在虚拟环境中！注意.bashprofile里不能有python的alias！！！！否则会安装到本机而不是虚拟机。
```
pip install django
```

确认安装成功
```
python -m django --version
```

### 3. 创建项目和应用
创建项目。运行`python manage.py runserver localhost:8100`看看如果启动成功就ok了。
```
django-admin.py startproject [项目名]
```

创建应用
```
python manage.py startapp [应用名]
```

添加应用:settings.py配置文件里的INSTALLED_APPS。写入'blog'。

### 4. 输出hello,world
views.py中输入以下语句
```
from django.http import HttpResponse

def hello(request):
    return HttpResponse('Hello,world'
```

urls.py中输入以下语句
```
from django.contrib import admin
from django.urls import path
from blog import views         #+ 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('index', views.hello),   #+
]
```

启动应用
```
python manage.py runserver
```

访问`http://localhost:8100/index`会显示helloworld。

### 5.django连接Docker中的mysql数据库（docker的配置方法参考aws的memo）
1. 在Virtualenv环境中，执行`pip install mysqlclient`。如果出现`OSError: mysql_config not found`。解决方法
- linux
```shell
sudo yum install python-devel mysql-devel
pip install mysqlclient
```

- mac
```shell
brew install mysql
export PATH=$PATH:/usr/local/mysql/bin
```

2. setting.py中配置数据库
注意的是localhost会出错。其他跟docker中配置一样。
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'docker_mysql',    #你的数据库名称
        'USER': 'docker',   #你的数据库用户名
        'PASSWORD': '123456', #你的数据库密码
        'HOST': '127.0.0.1', #你的数据库主机，留空默认为localhost
        'PORT': '3366', #你的数据库端口
    }
}
```

3. 执行`python manage.py migrate`如果不出错则配置成功。此时数据库中应该多了好几张表。