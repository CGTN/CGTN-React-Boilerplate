/*
 * @Author: Nokey
 * @Date: 2017-02-24 14:16:31
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-06-08 18:53:29
 */
'use strict';

const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const poststylus = require('poststylus')

/**
 * Common config that can be used in dev & prod environment
 */
const ENTRY = require('./webpack/entry')
const LOADERS = require('./webpack/loaders').loaders
const PLUGINS = require('./webpack/plugins').plugins
const RESOLVE = require('./webpack/resolve')

/**
 * Config
 */
const PUBLIC_PATH = config.public_path

module.exports = {
    // dectool should be false if env is production!!!
    devtool: false, // false || 'cheap-eval-source-map'

    entry: ENTRY,

    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle/[name].js",
        publicPath: PUBLIC_PATH
    },

    module: {
        loaders: LOADERS.concat([
            {
                test: /\.(gif|png|jpg)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '/images/[hash].[ext]'
                        }
                    }
                ]
            },
    
            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '/fonts/[name].[ext]'
                        }
                    }
                ]
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        }
                    ]
                })
            },
    
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[hash:base64:12]'
                            }
                        },
                        {
                            loader: 'stylus-loader',
                            options: {
                                use: [
                                    poststylus([ 'autoprefixer', 'rucksack-css' ])
                                ]
                            }
                        }
                    ]
                })
            }
        ])
    },

    plugins: PLUGINS.concat([
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production') // development - production
            }
        })
    ]),

    resolve: RESOLVE
};