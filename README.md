# React 多页应用模版

## Update Roadmap:

### 8 Dec, 2017:

1. `F`: 修复多页面打包时引入其他 css、js 资源文件问题；

### 1 Nov, 2017:

1. `A:` 添加 Fullpage 配置代码；
2. `A:` 添加响应式媒体查询阀值；

### 23 Oct, 2017:

1. `U:` 更改图片引用方式为模块引用，不再使用copy插件；
2. `A:` 添加*Roboto-Thin*作为基础字体（个人觉得比较好看）；
3. `A:` 添加*Utils*功能函数模块；
4. `A:` 添加*preload*功能组件；

## DOC:

### 一、 📦 打包方式分为生产和线上：
> 所有打包后的文件都在 build/ 目录下，可以直接将 build/ 部署到线上环境
```javascript
npm run dev
npm run build
```
```javascript
// 打包环境
node v6.10.3
webpack v3.2.0
```

### 二、 📃 多个 HTML 文件可能由单个 ejs 产出，配置文件里需要提供 _entry(每个入口文件的名字) 参数：
```javascript
...
entry: {
    'home.index': './home.js'
}
...
new htmlWebpackPlugin({
    inject: false,
    title: 'Title',
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/htmlTemplates/app.ejs'),
    _entry: 'home.index'
})
```

### 三、集成的基础插件和功能插件：

   1. [**jquery**](https://jquery.com/): $ 已暴露为全局变量，可以引用jQuery插件；
   
   2. [**jquery.html5loader**](https://github.com/GianlucaGuarini/jquery.html5loader): 传统的预加载所有图片，在展示网页之前；
   
   3. [**fullpage.js**](https://alvarotrigo.com/fullPage/)：全屏滚动插件；
   
   4. [**lodash**](https://lodash.com/)：js基础功能函数封装（utility library）；
   
   5. [**lazysizes**](https://github.com/aFarkas/lazysizes)：具有丰富的图片懒加载方式；
   
   6. [**gsap**](https://greensock.com/gsap)：动画库；
   
   7. [**stylus**](http://stylus-lang.com/): TJ大神出品的css预编译语言，底层node；
   
   8. [**nib**](http://tj.github.io/nib/): 配合stylus的css3扩展函数；

