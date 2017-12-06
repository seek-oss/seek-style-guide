const { promisify, promisifyAll } = require('bluebird');
const getPort = require('get-port');
const serve = require('serve');
const puppeteer = require('puppeteer');
const waitOn = promisify(require('wait-on'));
const mkdirp = promisify(require('mkdirp'));
const fs = promisifyAll(require('fs'));
const path = require('path');

// Config:
const scope = 'SEEK Style Guide';
const textViewports = [
  { name: 'Desktop', width: 1024, height: 768 },
  { name: 'Mobile', width: 320, height: 568 }
];
const symbolViewports = [
  { name: 'Desktop', width: 1024, height: 768 },
  { name: 'Mobile Plus', width: 414, height: 736 },
  { name: 'Mobile', width: 320, height: 568 }
];

(async function() {
  const port = await getPort();
  const docsPath = path.resolve(__dirname, '../../docs/dist');
  const server = serve(docsPath, { port, silent: true });

  try {
    const symbolsUrl = `http://localhost:${String(port)}/sketch-exports`;
    await waitOn({ resources: [symbolsUrl] });

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(symbolsUrl, { waitUntil: 'networkidle0' });

    const bundlePath = path.resolve(__dirname, '../dist/convertToAlmostSketch.bundle.js');
    const bundle = await fs.readFileAsync(bundlePath, 'utf8');
    await page.addScriptTag({ content: bundle });

    await page.evaluate(`convertToAlmostSketch.setupSymbols({ name: ${JSON.stringify(`${scope} Symbols`)} })`);

    await page.evaluate('convertToAlmostSketch.snapshotColorStyles()');

    for (const textViewport of textViewports) {
      await page.setViewport({ width: textViewport.width, height: textViewport.height });
      await page.evaluate(`convertToAlmostSketch.snapshotTextStyles({ suffix: "/${textViewport.name}" })`);
    }

    for (const symbolViewport of symbolViewports) {
      await page.setViewport({ width: symbolViewport.width, height: symbolViewport.height });
      await page.evaluate(`convertToAlmostSketch.snapshotSymbols({ suffix: "/${symbolViewport.name}" })`);
    }

    const asketchStylesJSON = await page.evaluate('convertToAlmostSketch.getStylesJSON()');
    const asketchSymbolsJSON = await page.evaluate('convertToAlmostSketch.getSymbolsJSON()');

    const outputPath = path.join(__dirname, '../../dist/asketch');
    const outputSymbolsPath = path.join(outputPath, 'symbols.asketch.json');
    const outputStylesPath = path.join(outputPath, 'styles.asketch.json');

    await mkdirp(outputPath);
    await Promise.all([
      fs.writeFileAsync(outputSymbolsPath, asketchSymbolsJSON),
      fs.writeFileAsync(outputStylesPath, asketchStylesJSON)
    ]);

    console.log('💎 Successfully extracted Sketch symbols and document styles.');

    browser.close();
  } finally {
    server.stop();
  }
}());
