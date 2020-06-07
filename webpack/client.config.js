const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    node: {
        __dirname: true,
    },
    mode: 'development',
    entry: {
        client: path.join(__dirname, '..', 'src', 'client.js'),
    },
    output: {
        path: path.join(__dirname, '..', 'public_html', 'assets'),
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
    plugins: [
        new VueLoaderPlugin(),
    ],
};