## 如何在EC2上创建实例并运行docker上的nginx-vue.js项目

### 0.准备工作：vue代码的根目录下生成dockerfile。并一起提交到github

[参考url](https://jp.vuejs.org/v2/cookbook/dockerize-vuejs-app.html)

以下是`dockerfile`的内容
```
# ビルド環境
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 本番環境
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```


### 1.建立EC2的实例
按照该url介绍的步骤创建一个EC2的实例。
[参考url](https://qiita.com/minato-naka/items/c21e4d53db7a720f8fdd#ec2%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E4%BD%9C%E6%88%90) 

注意开放端口80。并且配置私匙，比如mykey.pem用于本地ssh连接。

#### 1.1安装git, docker
进入到EC2管理控制台，安装git跟docker。
```shell
sudo yum install git
```

```shell
sudo yum install docker
```

### 2.从github上获取代码
进入到EC2管理控制台，并执行以下命令获取代码。
```shell
git clone xxx
```

### 3.启动docker
进入到EC2管理控制台，并执行以下命令。
```shell
启动docker
sudo service docker start

映射EC2端口80到docker内的80
docker run -it -p 80:80 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```

输入```ss -atn```确认80端口开放。

```
[ec2-user@ip-172-31-23-8 ~]$ ss -atn
State              Recv-Q              Send-Q                            Local Address:Port                            Peer Address:Port              
LISTEN             0                   100                                   127.0.0.1:25                                   0.0.0.0:*                 
LISTEN             0                   128                                     0.0.0.0:111                                  0.0.0.0:*                 
LISTEN             0                   128                                   127.0.0.1:35729                                0.0.0.0:*                 
LISTEN             0                   128                                     0.0.0.0:22                                   0.0.0.0:*                 
ESTAB              0                   0                                   172.31.23.8:22                                3.16.146.0:3313              
LISTEN             0                   128                                        [::]:111                                     [::]:*                 
LISTEN             0                   128                                           *:80                                         *:*                 
LISTEN             0                   128                                        [::]:22                                      [::]:*   
```

### 4.确认网页
通过curl访问得到网页
```shell
[ec2-user@ip-172-31-23-8 ~]$ curl localhost
<!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-wi
dth,initial-scale=1"><link rel=icon href=/favicon.ico><title>my-app</title><link rel=stylesheet href="https://fonts.googleapis.com/css?family=Roboto:1
00,300,400,500,700,900"><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css><link href=/css/app.32
b9a1ba.css rel=preload as=style><link href=/css/chunk-vendors.3cfcfd82.css rel=preload as=style><link href=/js/app.3841af71.js rel=preload as=script><
link href=/js/chunk-vendors.d0b820aa.js rel=preload as=script><link href=/css/chunk-vendors.3cfcfd82.css rel=stylesheet><link href=/css/app.32b9a1ba.c
ss rel=stylesheet></head><body><noscript><strong>We're sorry but my-app doesn't work properly without JavaScript enabled. Please enable it to continue
.</strong></noscript><div id=app></div><script src=/js/chunk-vendors.d0b820aa.js></script><script src=/js/app.3841af71.js></script></body></html>[ec2-
user@ip-172-31-23-8 ~]$ 
```
或者从EC2管理控制台复制ip地址并从浏览器访问。
![1](../pic/1.png)

![2](../pic/2.png)

===================
## 其他方便的操作
### 1.本地ssh连接
```
cd mykey.pem所在的目录
chmod 400 mykey.pem
ssh -i "mykey.pem" ec2-user@ec2-3-135-230-142.us-east-2.compute.amazonaws.com
```
主机名参考如下的【sshクライアント】
![3](../pic/3.png)

### 2.nginx的日志同步到EC2的目录下
启动时指定`-v`。把EC2本地设置好的default.conf跟容器同步，并把容器的nginx日志与EC2的本地同步
```
docker run -it -p 80:80 --rm --name dockerize-vuejs-app-1 -v ~/default.conf:/etc/nginx/conf.d/default.conf -v ~/access.log:/var/log/nginx/ vuejs-cookbook/dockerize-vuejs-app
```

### 3.nginx相关
- nginx设置文件目录
`/etc/nginx/`下。
- nginx改变设置后重新读取
```shell
nginx -s reload
```
- nginx日志位置
`/var/log/nginx`
