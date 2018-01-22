const userLoggedOutNavLinks = [
  {
    href: 'header.homeLink',
    title: 'header.homeTitle',
    text: 'header.homeText',
    childLinks: []
  },
  {
    href: 'header.searchLink',
    title: 'header.searchTitle',
    text: 'header.searchText',
    childLinks: []
  },
  {
    href: 'header.myJobStreetLink',
    title: 'header.myJobStreetTitle',
    text: 'header.myJobStreetText',
    childLinks: []
  },
  {
    href: 'header.companyProfilesLink',
    title: 'header.companyProfilesTitle',
    text: 'header.companyProfilesText',
    childLinks: []
  },
  {
    href: 'header.careerInsightsLink',
    title: 'header.careerInsightsTitle',
    text: 'header.careerInsightsText',
    childLinks: []
  },
  {
    href: 'header.jobStreetEducationLink',
    title: 'header.jobStretEducationTitle',
    text: 'header.jobStreetEducationText',
    childLinks: []
  },
  {
    href: 'header.moreLink',
    title: 'header.moreTitle',
    text: 'header.moreText',
    hideOnMobile: true,
    childLinks: [
      {
        href: 'header.overseasJobsLink',
        title: 'header.overseasJobsTitle',
        text: 'header.overseasJobsText'
      },
      {
        href: 'header.freshGradJobsLink',
        title: 'header.freshGradJobsTitle',
        text: 'header.freshGradJobsText'
      },
      {
        href: 'header.classifiedJobsLink',
        title: 'header.classifiedJobsTitle',
        text: 'header.classifiedJobsText'
      }
    ]
  }
];

const getNavLinks = (name, xToken) => {
  if (name && name.length) {
    return userLoggedOutNavLinks.map(link => {
      if (link.text === 'header.myJobStreetText') {
        return {
          ...link,
          href: 'header.myJobStreetLoggedInLink',
          hrefParams: {
            x: xToken
          }
        };
      }

      return link;
    });
  }

  return userLoggedOutNavLinks;
};

const getLoggedOutUserLinks = () => ([
  {
    href: 'header.loginLink',
    title: 'header.loginTitle',
    text: 'header.loginText',
    hasRightSideDivider: true,
    childLinks: []
  },
  {
    href: 'header.signUpLink',
    title: 'header.signUpTitle',
    text: 'header.signUpText',
    childLinks: []
  }
]);

const getUserLinks = (name, xToken) => {
  return [
    {
      href: '#',
      title: name,
      text: name,
      preventTranslation: true,
      childLinks: [
        {
          href: 'header.logoutLink',
          hrefParams: {
            x: xToken
          },
          title: 'header.logoutTitle',
          text: 'header.logoutText'
        },
        {
          href: 'header.helpLink',
          hrefParams: {
            x: xToken
          },
          title: 'header.helpTitle',
          text: 'header.helpText',
          hideOnMobile: true,
          hasDivider: true
        },
        {
          href: 'header.myAccountLink',
          hrefParams: {
            x: xToken
          },
          title: 'header.myAccountTitle',
          text: 'header.myAccountText',
          hideOnMobile: true
        }
      ]
    }
  ];
};

export default {
  getNavLinks,
  getUserLinks,
  getLoggedOutUserLinks
};
