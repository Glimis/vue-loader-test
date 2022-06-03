

const cbs = []
exports.cbs = cbs

exports.default = (source)=>{
    // 1. 截取 template 部分
    const templateTpl = source.match(/<template>(.*)<\/template>/s)[1]
    const scriptTpl = source.match(/<script>(.*)<\/script>/s)[1]
    const styleTpl = source.match(/<style>(.*)<\/style>/s)[1]
    // 2. 需要处理 -- styleTpl
    // component api 没这功能,丢给 plugin 处理
    cbs.forEach(cb => cb(styleTpl));
    /**
     * 3. 将template 组合到 scriptTpl 中
     * 注：返回的格式,必须跟 字符串 or 字节
     * 或者说 必须文本的另一种样式
     */
    return `
    // 此处返回的 component api 的代码，而非执行结果
    // 可以在此处加载style
    ${scriptTpl.slice(0,-2)}
        ,templateTpl:\`${templateTpl}\`
    }`
}



