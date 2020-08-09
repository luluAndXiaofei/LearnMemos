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
python manage.py runserver [端口号（默认8000）]
```

# 【URL与视图】第一个Django项目（2）
