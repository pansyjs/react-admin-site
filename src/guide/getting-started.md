---
order: 1
nav:
  title: 指南
  order: 1
group:
  title: 入门
---

# 开始使用

## 前序准备

你的本地环境需要安装 [yarn](https://yarnpkg.com)、[node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [TypeScript](https://www.typescriptlang.org/)、[React](https://reactjs.org)、[UmiJS](https://umijs.org/zh-CN)、[g2](https://g2.antv.vision/) 和[antd](https://ant.design/index-cn)，提前了解和学习这些知识会非常有帮助。


## 目录结构

```
├── config                     # umi 相关配置
├── docker                     # docker 相关配置
├── mock                       # 本地模拟数据
├── public                     # 静态资源
├── src                        # 源代码
│   ├── assets                 # 本地静态资源
│   ├── common                 # 类型定义、常量
│   ├── components             # 全局公用组件
│   ├── config                 # 全局配置
│   ├── layouts                # 布局文件
│   ├── locales                # 国际化资源
│   ├── models                 # 路由
│   ├── pages                  # 所有页面
│   ├── services               # 所有请求
│   ├── utils                  # 全局公用方法
│   ├── app.tsx                # 运行时配置文件
│   ├── authority.ts           # 权限定义文件
│   ├── global.less            # 全局样式
│   └── typings.d.ts           # 补充类型定义
├── package.json               # package.json
└── tsconfig.json              # tsconfig.json
```

## 本地开发

安装依赖。

```
yarn
```

启动服务

```
npm start
```
