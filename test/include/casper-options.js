casper.options.onResourceRequested = function skipResources(casper, requestData, request) {
  [
    // For speed:
    '__webpack_hmr'
  ].forEach(function match(needle) {
    if (requestData.url.indexOf(needle) > 0) {
      request.abort();
    }
  });
};

// Make Casper track only those errors which occure in written tests
// (not JS page warnings)
casper.removeAllListeners('page.error');

casper.on('page.error', function(msg) {
  if (/warning/i.test(msg)) {
    return; // Reducing noise
  }
  this.echo('FAIL: ' + msg, 'ERROR');
});
