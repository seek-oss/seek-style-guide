const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');
const opn = require('opn');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  {
    name: 'tenant',
    alias: 't',
    type: String,
    defaultValue: 'seekAsia'
  }
];

const options = commandLineArgs(optionDefinitions);

const defaultPort = 3000;
const jobStreetPort = 3001;
const jobsDBPort = 3002;

let port;

switch (options.tenant) {
  case 'jobsDB':
    port = jobsDBPort;
    break;
  case 'jobStreet':
    port = jobStreetPort;
    break;
  default:
    port = defaultPort;
}

config.plugins.push(new webpack.DefinePlugin({
  'process.env.SKU_TENANT': JSON.stringify(options.tenant)
}));

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
