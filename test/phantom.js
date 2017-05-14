
const flow = require('phantomflow').init({
  // See https://github.com/Huddle/PhantomFlow#options
  casperArgs: [
    '--local-storage-path=test-results',  // `test-results` gets cleared before each run, wiping localstorage.
    '--ignore-ssl-errors=true',
    '--web-security=no',
    '--verbose: false',
    '--concise: true',
    '--exitOnError: false'
  ],
  createReport: true,
  hideElements: ['[data-hide-phantom]'],
  includes: 'test/include',
  mismatchTolerance: 0.01 // A value of 0 doesn’t always pick up changes.
});

flow.run(code => {
  console.log('Process exited with code %d', code); // eslint-disable-line no-console
  console.log( // eslint-disable-line no-console
    'Hint: You can see visual report by running `npm run casper-report` command.');
  process.exit(code); // eslint-disable-line no-process-exit
});
