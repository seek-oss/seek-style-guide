const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');
const opn = require('opn');
const port = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: __dirname,
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true
}).listen(port, '0.0.0.0', error => {
  if (error) {
    console.log(error); // eslint-disable-line no-console
  } else {
    opn(`http://localhost:${port}`);
  }
});
