const headerPage = require('../test/pages/header.page');

flow('header desktop', function() {
  step('Open page', headerPage.load);
  step('Click links', headerPage.clickLinks);
});

flow('header mobile', function() {
  step('Open on mobile width', headerPage.loadMobile);
});
