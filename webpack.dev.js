const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require('path')

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname,'public'),
    hot: true,
    port: 9000,
    compress:true,
    open: true,
    historyApiFallback: true,
    watchContentBase: true,
  },
});
