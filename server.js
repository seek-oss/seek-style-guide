const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');
const opn = require('opn');
const port = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, 'localhost', error => {
  if (error) {
    console.log(error); // eslint-disable-line no-console
  } else {
    opn(`http://localhost:${port}`);
  }
});
