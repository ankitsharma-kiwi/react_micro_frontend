const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductIndex': './src/bootstrap.js'
      },
      shared: ['faker']
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
}
