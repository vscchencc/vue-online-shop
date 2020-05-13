### 单页面电商 vue 开源项目 
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cc-ch/vue-online-shop) 
![GitHub](https://img.shields.io/github/license/cc-ch/vue-online-shop) 
![GitHub contributors](https://img.shields.io/github/contributors/cc-ch/vue-online-shop)

#### 项目脚手架环境
webpack4 + 
vue2.6 +

#### 开源依赖部分
* Vue
* Vue-router
* Axios
* ES6
* Sass
* normalize.css
* font-awesome.css

#### 命令

开发  npm run dev

打包  npm run build

eslint校验 npm run lint

eslint修复 npm run lint-fix

分析包大小 npm run analyz (需要放开webpack.prod.config配置中的BundleAnalyzerPlugin)

#### commit提交规范

commit 提交使用 angular 提交规范

##### 提交步骤  
* git add .
* git cz (这里根据提示输入相关commit内容)
* git push

##### 版本发布流程
* git pull origin master

* git fetch origin --prune

  __1.0.0 表示当前要发布的版本__
* npm run release -- --release-as 1.0.0

* git push --follow-tags origin master

#### 目录结构
1. 开发内容都在src中
2. axios中是接口拦截和所有接口
3. router是单页面路由
4. pages存放所有单页面
5. components存放所有公共组件
6. utils存放公共工具方法
7. store写vuex的数据和方法
8. style里面存放公共样式
9. mock里面存放模拟数据
10. dist是最终打包的目录
12. webpack放置开发配置和打包配置
13. lang存放国际化对应文件
15. images存放图片资源

```
.
├── LICENSE
├── README.md
├── dist
│   ├── 1e59d2330b4c6deb84b340635ed36249.ttf
│   ├── 20fd1704ea223900efa9fd4e869efb08.woff2
│   ├── 8b43027f47b20503057dfbbaa9401fef.eot
│   ├── build.js
│   ├── css
│   │   ├── main-buddle.css
│   │   └── superSlide-buddle.css
│   ├── dll.build.js
│   ├── f691f37e57f04c152e2315ab7dbad881.woff
│   ├── fontawesome-webfont.svg
│   ├── haizeiwang.jpg
│   ├── images
│   │   ├── fontawesome-webfont.svg
│   │   └── haizeiwang.jpg
│   ├── index.html
│   ├── js
│   │   ├── dll.chunk.js
│   │   ├── main.chunk.js
│   │   ├── manifest.bundle.js
│   │   └── superSlide.chunk.js
│   ├── main.build.js
│   └── superSlide.build.js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── axios
│   │   ├── api.js
│   │   └── http-server.js
│   ├── components
│   │   ├── loginModule.vue
│   │   ├── navigationbar.vue
│   │   └── test.vue
│   ├── images
│   │   ├── haizeiwang.jpg
│   │   └── icon-strew.png
│   ├── lang
│   │   ├── en.js
│   │   ├── index.js
│   │   └── zh.js
│   ├── main.js
│   ├── mock
│   │   └── index.js
│   ├── pages
│   │   ├── home.vue
│   │   ├── initial.vue
│   │   ├── login.vue
│   │   ├── page1.vue
│   │   ├── page2.vue
│   │   └── register.vue
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── index.js
│   │   └── modules
│   │       ├── calculate.js
│   │       └── language.js
│   ├── style
│   │   ├── common.scss
│   │   └── mixin.scss
│   └── utils
│       └── utils.js
└── webpack
    ├── webpack.config.js
    └── webpack.prod.config.js

17 directories, 51 files
```

### Features
1. 前端 H5
    - [x] 引导页轮播图
    - [ ] 登陆
    - [ ] 注册
    - [ ] 首页
    - [ ] 发现
    - [ ] 好货
    - [ ] 个人中心