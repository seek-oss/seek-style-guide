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
  const symbolsUrl = `http://localhost:${String(port)}/sketch-exports`;

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
  const asketchDocumentJSON = await page.evaluate('styleguide2asketch.getASketchDocument()');

  const outputPath = path.join(__dirname, '../../dist/asketch');
  const outputPagePath = path.join(outputPath, 'page.asketch.json');
  const outputDocumentPath = path.join(outputPath, 'document.asketch.json');

  await mkdirp(outputPath);
  await Promise.all([
    fs.writeFileAsync(outputPagePath, JSON.stringify(asketchPageJSON)),
    fs.writeFileAsync(outputDocumentPath, JSON.stringify(asketchDocumentJSON))
  ]);

  console.log('💎 Successfully extracted Sketch symbols and document styles.');

  browser.close();
});

extractSymbols().finally(() => {
  if (server) {
    server.stop();
  }
});
