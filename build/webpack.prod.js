// 生产环境打包代码配置

const path = require('path')
const webpackCommonConfig = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
})