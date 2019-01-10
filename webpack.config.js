const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        // 默认 localhost
        host: 'localhost',
        port: 9000,
        // 实现实时更新，
        // 告诉dev server 在哪里查找文件
        contentBase: './dist',
        // 启动 HMR 热替换
        // 允许在运行时更新各种模块，而无需进行完全刷新
        hot: true,
    },
    plugins: [
        // new CleanWepackPlugin(['dist']),
        // new HtmlWebpackPlugin({template: './dist/index.html'})
        new HtmlWebpackPlugin({
            title: 'project-test'
        }),
        // 热替换
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}