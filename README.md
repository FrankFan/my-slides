### A slide webApp based on Backbone MVC

## 开发环境准备

使用 yeoman 的 backbone-generator 生成工程结构；
使用 grunt 构建自动化开发流程，`grunt serve` 在本地部署一个server，可以在文件时自动刷新页面；
使用 bower 管理前端组件

```shell
$ mkdir my-slides
$ npm install -g generator-backbone
$ yo backbone
$ bower install
$ npm install
```