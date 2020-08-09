[教程地址](https://ke.qq.com/course/308515?taid=2319028937078051)


# 【虚拟环境】`virtualenv`创建虚拟环境

## 安装虚拟环境
```shell
pip install sourc
```

## 创建虚拟环境
在当前目录下创建虚拟环境
```shell
virtualenv abc-env
```

## 进入virtualenv
```shell
cd abc-env/bin()
source activate

(abc-env) yilu@yinoMacBook-Pro bin % 
(abc-env) yilu@yinoMacBook-Pro bin % 
(abc-env) yilu@yinoMacBook-Pro bin % 
```

## 指定python版本
```shell
virtualenv -p python所在目录 [虚拟机名字]
```

## 退出虚拟环境
```shell
deactivate
```

# 【虚拟环境】`virtualenvwrapper`使用
virtualenvwrapper是对virtualenv的封装，可以更方便的管理环境。

## 安装`virtualenvwrapper`
```shell
pip install virtualenvwrapper
pip install virtualenvwrapper-win(仅限windows)
```

## 创建虚拟环境
```shell
mkvirtualenv my-env
```
## 添加环境变量到`.bash_profile`
WORKON_HOME代表虚拟环境的默认路径
```shell
export WORKON_HOME=~/.environments
source /usr/local/bin/virtualenvwrapper.sh
```
## 进入虚拟环境
可以在任意目录下执行
```
workon my-env
```

## 列出所有虚拟环境
```shell
lsvirtualenv
```

## 删除虚拟环境
```shell
rmvirtualenv my-env
```

## 进入虚拟环境的目录
```shell
cdvirtualenv
```

## 指定python版本
```shell
mkvirtualenv --python==python所在目录 my-env
```

# 【URL与视图】第一个Django项目（1）
## 创建项目
```shell
django-admin startproject first_project
```

## 创建应用
进入项目目录
```shell
python manage.py startapp app名
```

## 运行项目
```shell
# 默认服务器ip地址跟端口号 [0.0.0.0:8000]
python manage.py runserver [0.0.0.0:8000]
```

# 【URL与视图】第一个Django项目（2）
## 本机运行跟局域网访问
如果服务器地址设置`127.0.0.1`的话，只能本机访问。如果想让局域网的机器访问，则需要设置为`0.0.0.1`。然后`setting.py`中设置
```python
ALLOWED_HOSTS = [你想设置的host ip地址]
```

## 项目结构介绍
### manage.py
管理项目，跟项目交互基本使用这个文件。使用`python manage.py help`可以查看所有命令。

### settings.py
项目的配置信息。

### urls.py
配置url路由。

### wsgi.py
项目部署交互。

### vsc中配置django项目
通过上述步骤建立`virtualenv`环境+`django`项目后，用vsc打开django项目，然后在工作区`.vscode`文件夹下新建`settings.json`文件。指定python解释器为`virtualenv`下的python。不然的话，py文件中的from都会报错说无法导入xx模块。另外建立文件后会vsc自动让你添加pylint。如果不提示就按照下面的设置。
```json
{
    "python.pythonPath": "/Users/yilu/Desktop/GIT/LearnMemos/Django/django-env/bin/python",
    "python.linting.pylintEnabled": true,
    "python.linting.enabled": true
}
```

# 【URL与视图】视图函数介绍
## 视图
视图写在app的`views.py`中。跟spring中的controller+service有点像，但url映射并不会写在这里面。视图的第一个参数永远是request，是一个HttpRequest对象，这个对象包含了请求过来的所有信息。在视图中，一般是完成逻辑的相关工作。比如存储到数据库等。然后返回结果给浏览器，返回结果必须是HttpResponse对象或者它的子类。

```python
def book(request):
    return HttpResponse("图书首页123")
```

## url映射
视图写完后，要与URL进行映射，写在`urls.py`中。就好像spring中的contorller的`Get/PostMapping`映射的作用。`urls.py`中又一个`urlpatterns`变量，django会从这里寻找视图。匹配规则需要使用`django.urls.path`进行包裹，这个函数会返回一个URLPattern或者URLResolver对象。

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/', views.book),
]
```