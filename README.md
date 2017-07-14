# React 多页应用模版

> 所有打包后的文件都在 build/ 目录下，可以直接将 build/ 部署到线上环境

1. 📦 打包方式分为生产和线上：
```bash:
    npm run dev
    npm run prod
```

2.多个 HTML 文件可能由单个 ejs 产出，配置文件里需要提供 _entry 参数：
```javascript
new htmlWebpackPlugin({
    inject: false,
    title: 'Title',
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/htmlTemplates/app.ejs'),
    absURL: '',
    _entry: 'home.index'
})
```