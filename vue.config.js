const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 设置快捷访问： @ 代表访问  src目录下的文件
  // _c  代表访问  components目录
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components'))
  },
  // 打包是不生成.map文件， 减少打包大小， 加快打包速度
  productionSourceMap: false,

  // 跨域设置,将所有非静态文件请求，经过proxy访问
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
