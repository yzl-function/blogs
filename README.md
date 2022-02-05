### 前言

以前也搭建过自己的博客，利用`typecho`、`wordpress`等等，后面觉得自己就是学前端的，就为了巩固自己的技术，以及让自己了解前后端，以及上线的整个过程，就利用课余时间断断续续开发了这个博客，接下来要好好积累文章，提升自己😃


☀️博客主要使用到的技术如下：

前端（博客页面+后台管理）：

- `Nuxt.js`（博客页面）
- 状态集中管理工具`Pinia`（后台管理）
- 前端路由`Vue-Router`
- `Naive`组件库
- [一言](https://hitokoto.cn/)提供首页的诗句
- `markdown`格式渲染工具`@kangc/v-md-editor`
- 其他第三方包

后端：


后端使用`Nest.js`作为框架，包括但不限于：


- 用户管理：登录、注册
- 评论回复的邮箱提醒API，使用`nodemailer`编写
- 评论审核，使用[华为云](https://www.huaweicloud.com/product/textmoderation.html)的`内容审核-文本`（月调用量 < 1000，免费！！😀）
- 数据库：使用`Mysql`存储博客的数据

其他：

- 已配置SSL证书，开启`HTTPS`访问
- 对象存储使用七牛云OSS


### 前台

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b9e1400628948558c180dac79d34c89~tplv-k3u1fbpfcp-watermark.image?)


### 后台

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d24ddff6d094b58b95c46f901a4d5fb~tplv-k3u1fbpfcp-watermark.image?)


### 目前功能

#### 前台
- [x] 文章
- [x] 作品
- [x] 建站日志
- [x] 评论/回复
- [x] 文章目录
- [x] 搜索功能
- [x] 自定义页面
- [x] 响应式布局

#### 后台

- [x] 登录
- [x] 文章管理
- [x] 评论管理
- [x] 标签管理
- [x] 友链管理
- [x] 分类管理
- [x] 作品管理
- [x] 建站日志管理
- [x] 页面管理
- [x] 邮件管理

### 项目地址
**预览地址**

[前台地址](https://blog.lsyboy.cn)  [后台地址](https://admin.lsyboy.cn)

**源码地址**
> 博客源码分成了三个仓库
[前台](https://github.com/da34/YuJie-Code-client)  [后台](https://github.com/da34/YuJieCode-admin)
[后端](https://github.com/da34/YuJie-Service)

觉得不错希望大家给个`start` [⭐](https://emojipedia.org/star/)，有什么问题可直接`issuse`


### 说明
安装好依赖后，需要把后端的`prod.env.example`和`dev.env.example`这两个配置文件，去掉后面的`.example`
然后再把里面的配置补全



