const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader'];
const cssProduction = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader']
});
const cssConfig = isProduction ? cssProduction : cssDev;

console.log('::: Senses Fail :::');

module.exports = {
    entry: {
        'vendor': ['react', 'react-dom'],
        'app': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },

    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            ['~']: path.resolve(__dirname, 'src')
        }
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
            },
            {
                 test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                 use: 'file-loader?name=assets/[name]-[hash:6].[ext]'
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
        new CleanWebpackPlugin(
            [
                './public/*.js',
                './public/*.css'
                /* Should also remove all assets but whatever for now */
            ],
            { root: path.resolve(__dirname) }
        ),

        // I like my CSS files grouped yeah and not inlined
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            //disable: !isProduction
        }),

        // Copies all the assets to /public/assets/...
        // Flatten is false since this is just a PoC anyway, flip to true in prod.
        new CopyWebpackPlugin([
            { from: './assets/*.*', to: './assets', flatten: false }
        ]),

        // So we don't get React twice lol haha
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()         
    ],

    // devtool: isProduction ? 'none' : 'source-map'
    devtool: 'source-map'
};