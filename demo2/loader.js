

exports.default = function (source){
    // 1. 截取 template 部分
    const templateTpl = source.match(/<template>(.*)<\/template>/s)[1]
    const scriptTpl = source.match(/<script>(.*)<\/script>/s)[1]
    // const styleTpl = source.match(/<style>(.*)<\/style>/s)[1]
    // 2. 将template 组合到 scriptTpl 中
    
    return `
    require('style-loader!css-loader!./loader-css.js!${this.resourcePath}')
    ${scriptTpl.slice(0,-2)}
    ,templateTpl:\`${templateTpl}\`
}`
}