// 公共配置

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // mode: 'development',
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    // output: {
    //     path: path.resolve(__dirname + '/dist'),
    //     filename: '[name].[contenthash:8].js'
    // },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, '../src'),
                exclude: path.resolve(__dirname, '../node_modules')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            chunks: ['index'],
            excludeChunks: ['node_modules']
        })
    ],
    // devServer: {
    //     open: true,
    //     host: 'localhost',
    //     port: 3000
    // }
}