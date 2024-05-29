const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8002
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'carts',
            filename: 'remoteEntry.js',
            exposes: {
                './CartIndex': './src/bootstrap.js'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}