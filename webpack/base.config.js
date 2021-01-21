const { VueLoaderPlugin } = require('vue-loader');

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
}

module.exports = {
    buildConfig,
};