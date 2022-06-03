
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:require.resolve('./index.js'),
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin()

    ]
};