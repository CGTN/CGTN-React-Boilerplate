/**
 * Author: Mr.B
 * Date: 2017/7/7-18:02
 * Last Modified by: Nokey
 */
'use strict';

const path = require('path');

module.exports = {
    loaders: [
        {
            test: /\.js$/,
            /*exclude: /umeditor/,*/
            include: [
                path.resolve(__dirname, '../src/pages'),
                path.resolve(__dirname, '../src/modules'),
                path.resolve(__dirname, '../node_modules/gsap')
            ],
            loader: 'babel-loader',
            query: {
                presets: [
                    ['env', {
                        'targets': {
                            'browsers': ['last 2 versions', 'ie >= 9']
                        }
                    }], 
                    'react'
                ],
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
        }
    ]
}