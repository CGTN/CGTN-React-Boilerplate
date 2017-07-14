/**
 * Author: Mr.B
 * Date: 2017/7/7-18:02
 * Last Modified by: Nokey
 */
'use strict';

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    loaders: [
        {
            test: /\.js$/,
            /*exclude: /umeditor/,*/
            include: [
                path.resolve(__dirname, '../src/pages'),
                path.resolve(__dirname, '../src/resources/modules')
            ],
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                cacheDirectory: false
            }
        },

        {
            // 将jQuery导出到全局变量，来支持依赖它的插件
            test: require.resolve('jquery'),
            use: [
                {
                    loader: 'expose-loader',
                    query: 'jQuery'
                },
                {
                    loader: 'expose-loader',
                    query: '$'
                }
            ]
        },

        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        },

        {
            test: /\.styl$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!stylus-loader'
            })
        },

        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!less-loader'
            })
        },

        {
            test: /\.(gif|png|jpg)\??.*$/,
            use: 'url-loader?limit=1024&name=/images/[hash].[ext]',
        },

        {
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            use: 'url-loader?limit=1024&name=/fonts/[name].[ext]'
        }
    ]
}