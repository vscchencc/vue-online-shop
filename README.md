### 单页面项目（vue）
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cc-ch/vue-online-shop)

![GitHub](https://img.shields.io/github/license/cc-ch/vue-online-shop)

![GitHub contributors](https://img.shields.io/github/contributors/cc-ch/vue-online-shop)
### 单页面电商 vue 项目

#### 开源依赖部分
1. axios

#### 命令

开发  npm run dev

打包  npm run build

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

```
.
├── LICENSE
├── README.md
├── dist
│   ├── css
│   │   └── superSlide-buddle.css
│   ├── images
│   │   └── haizeiwang.jpg
│   ├── index.html
│   └── js
│       ├── dll.chunk.js
│       ├── main.chunk.js
│       ├── manifest.bundle.js
│       └── superSlide.chunk.js
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.vue
│   ├── axios
│   │   ├── api.js
│   │   └── http-server.js
│   ├── components
│   │   ├── navigationbar.vue
│   │   └── test.vue
│   ├── images
│   │   ├── haizeiwang.jpg
│   │   └── icon-strew.png
│   ├── main.js
│   ├── mock
│   │   └── index.js
│   ├── pages
│   │   ├── home.vue
│   │   ├── login.vue
│   │   ├── page1.vue
│   │   └── page2.vue
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   ├── style
│   │   └── common.scss
│   └── utils
│       └── utils.js
├── webpack.config.js
└── webpack.prod.config.js

14 directories, 31 files
```
