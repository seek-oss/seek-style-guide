var path = require('path');
var ghpages = require('gh-pages');
var basePath = path.join(__dirname, '../dist');
var repoUrl = require('../package.json').repository.url;

var makeConfig = function(token) {
  if (token) {
    // CI deployment config
    return {
      repo: repoUrl.replace(/^https?:\/\//, 'http://' + token + '@'),
      logger: function(message) {
        // Hide token from build logs
        message = message.replace(new RegExp(token, 'g'), '[TOKEN]');
        console.log(message);
      }
    };
  }

  // Local deployment config
  return {
    logger: function (message) {
      console.log(message)
    }
  };
};

ghpages.publish(basePath, makeConfig(process.env.GH_TOKEN), function() {
  console.log('Deployment complete!');
});
