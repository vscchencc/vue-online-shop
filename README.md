### 单页面项目（vue）

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
9. dist是最终打包的目录

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
│   ├── images
│   │   └── haizeiwang.jpg
│   ├── main.js
│   ├── pages
│   │   ├── home.vue
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

13 directories, 26 files
```
