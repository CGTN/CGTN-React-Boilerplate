/*
 * @Author: Nokey
 * @Date: 2017-02-24 14:16:31
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-07-13 17:37:09
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

module.exports = {
    // dectool should be false if env is production!!!
    devtool: false, // false || 'cheap-eval-source-map'

    entry: ENTRY,

    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle/[name].js",
        publicPath: '/brics'
    },

    module: {
        loaders: LOADERS
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