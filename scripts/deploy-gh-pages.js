var path = require('path');
var ghpages = require('gh-pages');
var basePath = path.join(__dirname, '../docs/dist');
var repoUrl = require('../package.json').repository.url;

var GH_PAGES_TOKEN = process.env.GH_PAGES_TOKEN;
var tokenRegex = GH_PAGES_TOKEN ? new RegExp(GH_PAGES_TOKEN, 'g') : null;

var log = function(message) {
  if (tokenRegex) {
    // Hide token from build logs
    message = message.replace(tokenRegex, '[GH_PAGES_TOKEN]');
  }

  console.log(message);
};

var makeConfig = function() {
  return {
    repo: GH_PAGES_TOKEN
      ? repoUrl.replace('https://', 'https://' + GH_PAGES_TOKEN + '@')
      : repoUrl,
    logger: log
  };
};

ghpages.publish(basePath, makeConfig(), function(err) {
  if (err) {
    log('Deployment error');
    return log(JSON.stringify(err));
  }

  log('Deployment complete!');
});
