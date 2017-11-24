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

  const bundlePath = path.resolve(__dirname, '../dist/convertToAlmostSketch.bundle.js');
  const bundle = await fs.readFileAsync(bundlePath, 'utf8');
  await page.addScriptTag({ content: bundle });

  const asketchSymbolsJSON = await page.evaluate('convertToAlmostSketch.getASketchSymbols()');
  const asketchStylesJSON = await page.evaluate('convertToAlmostSketch.getASketchStyles()');

  const outputPath = path.join(__dirname, '../../dist/asketch');
  const outputSymbolsPath = path.join(outputPath, 'symbols.asketch.json');
  const outputStylesPath = path.join(outputPath, 'styles.asketch.json');

  await mkdirp(outputPath);
  await Promise.all([
    fs.writeFileAsync(outputSymbolsPath, JSON.stringify(asketchSymbolsJSON)),
    fs.writeFileAsync(outputStylesPath, JSON.stringify(asketchStylesJSON))
  ]);

  console.log('💎 Successfully extracted Sketch symbols and document styles.');

  browser.close();
});

extractSymbols().finally(() => {
  if (server) {
    server.stop();
  }
});
