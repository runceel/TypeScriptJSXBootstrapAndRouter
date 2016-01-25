var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './Scripts/app.tsx'
    },
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        root: [path.join(__dirname, 'node_modules')],
        extensions: ['', '.js', '.ts', '.tsx' ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin() // minify
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};