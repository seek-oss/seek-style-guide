const { promisify } = require('util');
const mv = promisify(require('mv'));
const opn = require('opn');
const fs = require('fs');
const { createServer } = require('http-server');
const portfinder = require('portfinder');
portfinder.basePort = 4000;

(async() => {
  if (!fs.existsSync('docs/dist/seek-style-guide')) { // eslint-disable-line no-sync
    await mv('docs/dist', 'docs/seek-style-guide', { mkdirp: true });
    await mv('docs/seek-style-guide', 'docs/dist/seek-style-guide', { mkdirp: true });
  }

  const port = await portfinder.getPortPromise();
  const host = '127.0.0.1';
  const url = `http://${host}:${port}/seek-style-guide/`;

  createServer({ root: 'docs/dist', cache: -1 })
    .listen(port, host, err => {
      if (err) {
        throw new Error(err);
      }

      console.log(`Preview available at: ${url}`);
      opn(url);
    });
})();
