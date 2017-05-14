const headerPage = require('../test/pages/header.page');

flow('header', function () {
  step('Open page', headerPage.load);
  step('Click links', headerPage.clickLinks);
});
