const navTabs = [
  {
    selector: '[data-automation="navigation-job-search-link"]',
    url: ''
  },
  {
    selector: '[data-automation="navigation-150k-jobs-link"]',
    url: '150kjobs'
  },
  {
    selector: '[data-automation="navigation-profile-link"]',
    url: 'profile'
  },
  {
    selector: '[data-automation="navigation-companies-link"]',
    url: 'companies'
  },
  {
    selector: '[data-automation="navigation-advice-link"]',
    url: 'career-advice'
  }
];

const screenshot = function() {
  phantomCSS.screenshot('[data-automation="demo-component-wrapper"]');
};

exports.load = function() {
  casper
    .viewport(1280, 1440)
    .thenOpen('http://localhost:3000/header', function() {
      casper.test.pass('Header page loaded');
      casper.test.assertExists('header[aria-label="Primary navigation"]');

      screenshot();
    });
};

exports.loadMobile = function() {
  casper
    .viewport(360, 1440)
    .thenOpen('http://localhost:3000/header', function() {
      screenshot();
    });
};

exports.clickLinks = function() {
  phantomCSS.turnOffAnimations();
  navTabs.forEach(function(navTab) {
    casper.click(navTab.selector);
    casper.test.assertUrlMatch('http://localhost:3000/header#actualHref=/' + navTab.url, 'Check link: /' + navTab.url + ' *OK*');
  });
  casper.click('[data-automation="logo"]');
  casper.test.assertUrlMatch('http://localhost:3000/header#actualHref=/', 'Check click on logo: ' + '*OK*');

  casper.click('[data-automation="user-account-menu-toggle"]');
  screenshot();
};
