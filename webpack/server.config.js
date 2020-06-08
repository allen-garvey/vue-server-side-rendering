const path = require('path');
const nodeExternals = require('webpack-node-externals');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    target: 'node',
    node: {
        __dirname: true,
    },
    mode: 'development',
    entry: {
        build: path.join(__dirname, '..', 'build', 'build.js'),
        server: path.join(__dirname, '..', 'build', 'server.js'),
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:8]',
                            },
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                ]
            },
        ]
    },
    externals: [nodeExternals()],
    plugins: [
        new VueLoaderPlugin(),
    ],
};