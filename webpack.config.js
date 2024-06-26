const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            filename: 'main.html'
        })
    ],

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource'
          },
        ],
    },
}