> ## 简介

![](https://img.shields.io/badge/Language-ES6-red)
![](https://img.shields.io/badge/DevStructure-VUE-0000FF)
![](https://img.shields.io/badge/UI-ElementUI-green)

项目简称：**_open2lui_**  
采用VUE框架进行研发，是支撑***OPENTOOL-Z***项目的前端UI。

后端 **_open2lisapi_**：https://github.com/GIS90/open2lisapi.git

### 平台地址

```
线上地址：http://2l.pygo2.top/  
测试账号：tester  
密码：abc1234
```


### 项目架构

项目基于**ES6+VUE+ElementUI+vue-element-admin**进行搭建的一个前端项目，脚手架是使用了vue-element-admin。  
官网地址：https://panjiachen.github.io/vue-element-admin-site/zh/guide/  
这个前端VUE脚手架非常好用，直接git clone下来之后就可以跑，感谢***panjiachen***以及***脚手架的其他贡献者***。 

- ES6 开发语言
- VUE JS框架
- ElementUI UI开发框架
- vue-element-admin VUE前端脚手架（VUE + ElementUI）


### 开发进度记录

记录信息采用了腾讯共享文档的方式记录API接口、数据库模型、开发周期等信息。

- 开发周期记录  
  https://docs.qq.com/sheet/DZmJZUlBuS1dla0Vw?tab=BB08J2

- 数据模型说明  
  https://docs.qq.com/sheet/DZmtvY2xTUE9LdlND?tab=BB08J2

> ## 项目说明

### env配置

项目env配置主要有2套，位于项目的根目录下：
- dev 测试环境：.env.development
- prod 线上环境：.env.production

里面配置了一些后端API以及公共配置参数。

### settings.js配置

文件位置：根目录/src/settings.js

- logoTitle、logoUrl、loginTitle、pageTitle：分别是系统首页的LOGO标题、以及图片地址，还有登录页的标题，浏览器页面标题的prefix
- showSettings：系统布局配置，也就是右侧的小按钮
- tagsView：是否显示tagsView（tab）
- fixedHeader：是否固定标题
- sidebarLogo：是否展示首页LOGO内容，与logoTitle、logoUrl挂钩
- baseInfo：系统基础信息


### 环境搭建

- PC电脑一台，WIN、MacOS、Ubuntu以及其他Linux系统均可
- 安装NODE、NPM，NODE版本>=16.9.1，NPM版本>=7.21.1，这里建议安装一个n或者nvm，可以使用多版本的NODE、NPM。
- git clone https://github.com/GIS90/open2lui.git
- 打开Terminal，cd到项目根目录。
- npm install，等待即可（时间可能有点久，喝个咖啡）。
- 如果有错误根据错误提示去解决，无错误执行下一步。
- npm run dev，还有一些其他lint、build、test、new等其他参数，可以参考package.json中的scripts模块。

> ## 开发特定点

- 1.首页登录校验  
文件位置：src/views/login->index.vue  
说明：账户登录有validate校验，校验的方式是用到src/utils->validate.js中的校验方法。


- 2.store中的role类型  
文件位置：src->store->modules->user.js  
说明：api返回的role为code字符串，getInfo中转化为数组


- 3.Mock数据那块上线记得禁止掉  
文件位置：src->main.js   
说明：禁止掉Mock数据请求
  ```
  mockXHR()
  vue.config.js->devServer->39行注释掉
  before: require('./mock/mock-server.js')
  ```

- 4.登录首页成功后的跳转修改  
文件位置：src->views->login->index.vue
说明：在文件的(162-163)处位置，登录成功后指定跳转到首页，否则会有redirect进行跳转   


- 5.api请求100为正常，非100下会显示报错信息   
文件位置：src->utils->request.js（68行）
说明：项目中使用axios方法去请求后台API，在request.js中进行请求前、请求后的hook，想修改其他内容，可以在此进行修改

- 6.修改axios请求后台API超时设置【timeout】  
  文件位置：src->utils->request.js（10行）
  说明：正常一个API请求时间很短，如果做长时间后台处理的话可以设置久一点，根据项目情况定。


> ## 感谢

再次感谢***panjiachen***以及***脚手架的其他贡献者***，在这里页推荐大家使用这个VUE前端脚手架：   
https://panjiachen.github.io/vue-element-admin-site/zh/guide/

> ## 联系方式

* ***Github:*** https://github.com/GIS90
* ***Email:*** gaoming971366@163.com
* ***Blog:*** http://pygo2.top
* ***WeChat:*** PyGo90


Enjoy the good life everyday！！！



