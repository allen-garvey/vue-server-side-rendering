const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function buildConfig(){
    return {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.scss$/,
                    oneOf: [
                        // this matches `<style module>`
                        {
                            resourceQuery: /module/,
                            use: [
                                'vue-style-loader',
                                {
                                    loader: 'css-loader',
                                    options: {
                                        esModule: false,
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
                        {
                            use: [
                                {
                                    loader: MiniCssExtractPlugin.loader,
                                },
                                'css-loader',
                                'sass-loader',
                            ]
                        },
                    ],
                },
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    },
                },
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.json'],
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: './app.css',
            }),
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: false,
            }),
        ],
    };
}

module.exports = {
    buildConfig,
};