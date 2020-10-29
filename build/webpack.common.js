// 公共配置

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, '../src'),
                exclude: path.resolve(__dirname, '../node_modules')
            },
            {
                test: /\.css$/,
                use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                              modules: true,
                              importLoaders: 1,
                            },
                        },
                        'postcss-loader'
                    ]
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
}