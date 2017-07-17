/*
 * @Author: Nokey
 * @Date: 2017-02-24 14:16:31
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-07-17 13:59:13
 */
'use strict';

const webpack = require('webpack');
const path = require('path');

/**
 * Common config that can be used in dev & prod environment
 */
const ENTRY = require('./webpack/entry');
const LOADERS = require('./webpack/loaders').loaders;
const PLUGINS = require('./webpack/plugins').plugins;
const RESOLVE = require('./webpack/resolve');

/**
 * Config
 */
const PORT = 8888;
const PUBLIC_PATH = '/brics';

/**
 * Dev plugins
 */
const openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    // dectool should be false if env is production!!!
    devtool: 'cheap-eval-source-map', // false || 'cheap-eval-source-map'

    // devServer
    devServer: {
        port: PORT,
        contentBase: path.join(__dirname, './build')
    },

    entry: ENTRY,

    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle/[name].js",
        publicPath: PUBLIC_PATH
    },

    module: {
        loaders: LOADERS
    },

    plugins: PLUGINS.concat([
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development') // development - production
            }
        })

        ,new openBrowserPlugin({
            url: 'http://localhost:' + PORT + PUBLIC_PATH
        })
    ]),

    resolve: RESOLVE
};