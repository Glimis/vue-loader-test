

const loadCss = require('./loader-css.js').default
const loadJs = require('./loader-js.js').default

exports.default = function (source){
    
    if(this.resourceQuery === '?style'){
        return loadCss(source)
    }
    if(this.resourceQuery === '?js'){
        return loadJs(source)
    }
    
    // 1. 截取 template 部分
    const templateTpl = source.match(/<template>(.*)<\/template>/s)[1]
    // 为了支持lang,script 需要通过babel获取
    // const scriptTpl = source.match(/<script>(.*)<\/script>/s)[1]
    // const styleTpl = source.match(/<style>(.*)<\/style>/s)[1]
    // 2. 将template 组合到 scriptTpl 中
    

    return `
    require('style-loader!css-loader!${this.resourcePath}?style');
    // 为了支持 script 可以被 其他loader 处理,需要做如下处理
    const js = require('${this.resourcePath}?js');

    js.templateTpl = \`${templateTpl}\`
    exports.default = js
    `
}