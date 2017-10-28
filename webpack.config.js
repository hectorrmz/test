var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './src/app.ts',
        'vendor': './src/vendor.ts'
    },
    devtool: 'source-map',
    output: {
        path: './wwwroot/js',
        filename: '[name].js',
        devtoolModuleFilenameTemplate: '../../[resource-path]'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        })
    ]
}