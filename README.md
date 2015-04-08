## A slide webApp based on Backbone MVC

### 开发环境准备

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

### npm install 太慢解决办法
`npm install` 原本使用 `https://registry.npmjs.org/` 作为源，由于国内 `GFW` 导致安装太慢甚至装不上。
解决办法可以使用国内的源，推荐淘宝的：`https://registry.npm.taobao.org`

1. 临时救急法
安装时在命令行指定源
`npm --registry=https://registry.npm.taobao.org install express`

2. 一劳永逸法
编辑 `~/.npmrc` 文件，加入：
`registry = https://registry.npm.taobao.org`
