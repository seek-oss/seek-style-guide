const isObject = obj => obj !== null && !Array.isArray(obj) && obj === Object(obj);

const navLinks = [
  {
    href: 'header.homeLink',
    title: 'header.homeTitle',
    text: 'Home',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.searchLink',
    title: 'header.searchTitle',
    text: 'Search Jobs',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.myJobStreetLink',
    title: 'header.myJobStreetTitle',
    text: 'MyJobStreet',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.profilesLink',
    title: 'header.profilesTitle',
    text: 'Company Profiles',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.careerInsightsLink',
    title: 'header.careerInsightsTitle',
    text: 'Career Insights',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.jobStreetEducationLink',
    title: 'header.jobStretEducationTitle',
    text: 'Education',
    hasIcon: false,
    childLinks: []
  },
  {
    href: '#',
    title: 'header.moreTitle',
    text: 'More',
    hasIcon: false,
    hideOnMobile: true,
    childLinks: [
      {
        href: 'header.overseasJobsLink',
        title: 'header.overseasJobsTitle',
        text: 'Overseas Jobs'
      },
      {
        href: 'header.freshGradJobsLink',
        title: 'header.freshGradJobsTitle',
        text: 'Fresh Graduate Jobs'
      },
      {
        href: 'header.classifiedJobsLink',
        title: 'header.classifiedJobsTitle',
        text: 'Fresh Graduate Jobs'
      }
    ]
  }
];

const userLoggedOutLinks = [
  {
    href: 'header.loginLink',
    title: 'header.loginTitle',
    text: 'Log In',
    hasIcon: false,
    childLinks: []
  },
  {
    href: 'header.signUpLink',
    title: 'header.signUpTitle',
    text: 'Sign Up',
    hasIcon: false,
    childLinks: []
  }
];

const getUserLinks = candidate => {
  const isUserLoggedIn = isObject(candidate);
  return isUserLoggedIn ?
  [{
    href: '',
    title: candidate.username,
    text: candidate.username,
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
        href: 'header.accountLink',
        hrefParams: {
          id: candidate.id
        },
        title: 'header.accountTitle',
        text: 'header.accountText'
      }
    ]
  }] :
        userLoggedOutLinks;
};

export default {
  navLinks,
  getUserLinks
};
