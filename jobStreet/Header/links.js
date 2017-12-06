const navLinks = [
  {
    href: 'header.homeLink',
    title: 'header.homeTitle',
    text: 'header.homeText',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.searchLink',
    title: 'header.searchTitle',
    text: 'header.searchText',
    linkIsActive: true,
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.myJobStreetLink',
    title: 'header.myJobStreetTitle',
    text: 'header.myJobStreetText',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.companyProfilesLink',
    title: 'header.companyProfilesTitle',
    text: 'header.companyProfilesText',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.careerInsightsLink',
    title: 'header.careerInsightsTitle',
    text: 'header.careerInsightsText',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.jobStreetEducationLink',
    title: 'header.jobStretEducationTitle',
    text: 'header.jobStreetEducationText',
    hasIcon: false,
    childLinks: []
  },
  {
    href: '#',
    title: 'header.moreTitle',
    text: 'header.moreText',
    hasIcon: false,
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

const userLoggedOutLinks = [
  {
    href: 'header.loginLink',
    title: 'header.loginTitle',
    text: 'header.loginText',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.signUpLink',
    title: 'header.signUpTitle',
    text: 'header.signUpText',
    hasIcon: false,
    childLinks: []
  }
];

const getUserLinks = (name, xToken) => {
  return (name && name.length) ? [
    {
      href: '',
      title: name,
      text: name,
      preventTranslation: true,
      hasIcon: false,
      childLinks: [
        {
          href: 'header.logoutLink',
          title: 'header.logoutTitle',
          text: 'header.logoutText'
        },
        {
          href: 'header.helpLink',
          title: 'header.helpTitle',
          text: 'header.helpText'
        },
        {
          href: 'header.myAccountLink',
          hrefParams: {
            id: xToken
          },
          title: 'header.myAccountTitle',
          text: 'header.myAccountText'
        }
      ]
    }
  ] : userLoggedOutLinks;
};

export default {
  navLinks,
  getUserLinks
};
