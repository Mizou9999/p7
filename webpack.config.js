const webpack = require('webpack')
const path = require('path')

//const proxy = require('http-proxy-middleware')



module.exports = {
    entry: {
        entry: __dirname + '/src/app.js'
    },
    output: {
        filename: 'bundle.js'

    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9300,
        watchContentBase: true,
        proxy: {
            '/api': {
                target: 'https://maps.googleapis.com',
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            }
        }
    },
    module: {
        rules: [{
                test: /\.(json|html)/,
                test: /\.css$/,
                use: [{ loader: 'style-loader/url' },
                    { loader: 'file-loader' }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }

        ],
        
    }

}