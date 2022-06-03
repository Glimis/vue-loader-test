
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: require.resolve('./index.js'),
  mode: 'development',
  module: {
    rules: [{
      test: /\.vue$/,
      loader: require.resolve('./loader.js')
    },
    {
      test: /\.js$/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      /**
       * 如果需要支持 .js 的配置
       * 此处需要 克隆原本的 规则,并转换为 我们生成代码会使用的方式
       */
      loader: 'babel-loader',
      resourceQuery(query){
        return query === '?js'
      }
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};