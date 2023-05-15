const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    entry: './src/index.js', 
    target: 'node',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: 'asset/resource',

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(node)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new NodePolyfillPlugin(),
        new FaviconsWebpackPlugin({
            logo:'./src/icons/battleShip.svg',
        }),
    ]
};
