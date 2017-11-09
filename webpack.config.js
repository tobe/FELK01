const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader'];
const cssProduction = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader']
});
const cssConfig = isProduction ? cssProduction : cssDev;

module.exports = {
    entry: {
        'app': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },

    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules']
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react'],
                    plugins: [
                        'transform-object-rest-spread', 
                        'transform-class-properties',
                        // Enables dynamic loading of modules;
                        // useful for progressive web apps. 
                        // 'syntax-dynamic-import' 
                    ]
                },

            },
            {   
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            }            
        ]
    },

    devServer: {
        hot: true, // We're using Hot Module Replacement
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        stats: 'minimal',
        port: 3000
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            //disable: !isProduction
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()         
    ],

    // devtool: isProduction ? 'none' : 'source-map'
    devtool: 'source-map'
};