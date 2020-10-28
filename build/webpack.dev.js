// 开发环境配置

const path = require('path')
const webpackCommonConfig = require('./webpack.common.js')
const { merge } = require('webpack-merge')

module.exports = merge(webpackCommonConfig, {
    mode: 'development',
    devServer: {
        open: true,
        progress: true,  // 显示打包的进度条
        host: 'localhost',
        port: 3000
    }
})