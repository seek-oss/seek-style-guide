const bluebird = require('bluebird');
const getPort = require('get-port');
const serve = require('serve');
const puppeteer = require('puppeteer');
const waitOn = bluebird.promisify(require('wait-on'));
const mkdirp = bluebird.promisify(require('mkdirp'));
const fs = bluebird.promisifyAll(require('fs'));
const path = require('path');

let server;

const extractSymbols = bluebird.method(async() => {
  const port = await getPort();
  const symbolsUrl = `http://localhost:${String(port)}/symbols`;

  const docsPath = path.resolve(__dirname, '../../docs/dist');
  server = serve(docsPath, { port, silent: true });
  await waitOn({ resources: [symbolsUrl] });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1024, height: 768 });
  await page.goto(symbolsUrl, { waitUntil: 'networkidle0' });

  const bundlePath = path.resolve(__dirname, '../dist/styleguide2asketch.bundle.js');
  const bundle = await fs.readFileAsync(bundlePath, 'utf8');
  await page.addScriptTag({ content: bundle });

  const asketchPageJSON = await page.evaluate('styleguide2asketch.getASketchPage()');

  const outputPagePath = path.join(__dirname, '../../dist/asketch/page.asketch.json');
  await mkdirp(path.dirname(outputPagePath));
  await fs.writeFileAsync(outputPagePath, JSON.stringify(asketchPageJSON));

  console.log('💎 Successfully extracted Sketch symbols.');

  browser.close();
});

extractSymbols().finally(() => {
  if (server) {
    server.stop();
  }
});
