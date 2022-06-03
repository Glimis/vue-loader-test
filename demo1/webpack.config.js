
const {cbs} = require('./loader')

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:require.resolve('./index.js'),
    mode:'development',
    plugins:[
        {
            apply(){
                /**
                 * 在这里接收样式,然后想办法在 结束后,处理到 html 中
                 */
                cbs.push((styleTpl)=>{
                    console.log('想办法整到 dist 中',styleTpl)
                })
            }
        },
        new HtmlWebpackPlugin()
    ]
};

