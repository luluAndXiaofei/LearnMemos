## docker

### docker安装
[安装地址(mac)](https://www.docker.com/get-started)

### docker images
显示镜像一览

### docker build
使用 Dockerfile 创建镜像。
- `-t`:镜像的名字及标签。也可以写成`--tag`。


### docker pull + 镜像名
拉取镜像
 
### docker (container) run + docker名
创建并启动容器。结束后并不会销毁容器。除非添加`--rm`。另外如果本地没有docker名的image，会自动拉取。
-  `--rm`:结束后销毁容器
-  `--name`:给容器起名
-  `-d`: 在后台运行
-  `docker container logs 容器名`:查看后台运行的docker的日志（也就是`-d`启动的docker）。
-  `--volume "本地目录":docker内目录`:将当前目录（$PWD）映射到容器。例如：--volume "$PWD/":/var/www/html 
-  `-p 8080:80`:把宿主机8080端口映射到docker的80端口
-  `--env 变量名=变量值`: 向容器传入环境变量。例如`--env MYSQL_ROOT_PASSWORD=123456`。
-  `--link 容器名:起个别名`:链接其他容器。比如`--link wordpressdb:mysql`。


### docker start + docker-id
`docker run`会每次都生成新的容器。如果已经有停止运行的容器想要重新运行，使用`docker start`。

### docker (container) ps
查看正在运行的容器。要显示存在但没有正在运行的容器可以指定`-a`。
 
### docker stop <容器 ID>
关闭容器

## docker-compose
Compose 是 Docker 公司推出的一个工具软件，可以管理多个 Docker 容器组成一个应用。你需要定义一个 YAML 格式的配置文件`docker-compose.yml`，写好多个容器之间的调用关系。docker-compose分为三层，分别是工程（project），服务（service），容器（container）。

### docker-compose安装
安装docker后，会自动安装docker-compose。

### docker-compose up/docker-compose stop
只要一个命令，就能同时启动/关闭这些容器。
```shell
# 启动所有服务
$ docker-compose up
# 关闭所有服务
$ docker-compose stop
```

### docker exec -it 容器名 命令
用于连接已经启动的容器
```
$ `docker exec -it docker-demo_mysql_1(容器名) /bin/bash`
```

### mysql -uroot -p
进入容器后，root连接mysql数据库

- 关闭以后，这两个容器文件还是存在的，写在里面的数据不会丢失。下次启动的时候，还可以复用。下面的命令可以把这两个容器文件删除（容器必须已经停止运行）。
```shell
$ docker-compose rm
```


- `docker-compose.yml`配置实例
```yml
mysql:
    image: mysql:5.7
    environment:
     - MYSQL_ROOT_PASSWORD=123456
     - MYSQL_DATABASE=wordpress
web:
    image: wordpress
    links:
     - mysql
    environment:
     - WORDPRESS_DB_PASSWORD=123456
    ports:
     - "127.0.0.3:8080:80"
    working_dir: /var/www/html
    volumes:
     - wordpress:/var/www/html
```

- `docker-compose.yml`[配置详解](https://www.jianshu.com/p/2217cfed29d7)
- tips: 修改`docker-compose.yml`的内容后需要重启

