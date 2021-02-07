### 项目说明
该项目是一个个人前后端分离项目脚手架。

### 目录结构
```
  - lib                                           源码
    - config                                      配置
      -repo-config.js                             模板下载地址
    - core                                        核心代码
      - actions.js                                各个命令的核心逻辑
      - create.js                                 创建命令
      - help.js                                   --help相关的选项
    - templates                                   addcpn、addview、addstore命令使用的模板
    - utils                                       工具文件
      - compile.js                                封装ejs的renderFile函数
      - createFileSync.js                         判断文件夹下是否存在某个路径，不存在则创建
      - terminal.js                               封装spawn，执行终端命令
      - toKebabCaseName.js                        将名称变成小驼峰形式
```

### 安装
```
npm install vue-clicli -g
```

### 创建vue2项目
```
li create 项目名称
```

### 创建组件
```
li addcpn 组件名
```

### 创建页面
```
li addview 页面
```

### 创建vuex模块
```
li addstore 模块名
```