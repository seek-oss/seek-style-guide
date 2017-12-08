const userLoggedOutNavLinks = [
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
    isActive: true,
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
    href: 'header.moreLink',
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

const getNavLinks = (name, xToken) => {
  if (name && name.length) {
    return userLoggedOutNavLinks.map(link => {
      if (link.text === 'header.myJobStreetText') {
        return {
          ...link,
          href: '#',
          childLinks: [
            {
              href: 'header.myProfileLink',
              title: 'header.myProfileTitle',
              text: 'header.myProfileText',
              isSectionHeader: true
            },
            {
              href: 'header.previewProfileLink',
              hrefParams: {
                x: xToken
              },
              title: 'header.previewProfileTitle',
              text: 'header.previewProfileText'
            },
            {
              href: 'header.editProfileLink',
              hrefParams: {
                x: xToken
              },
              title: 'header.editProfileTitle',
              text: 'header.editProfileText'
            },
            {
              href: 'header.onlineApplicationLink',
              hrefParams: {
                x: xToken
              },
              title: 'header.onlineApplicationTitle',
              text: 'header.onlineApplicationText'
            },
            {
              href: 'header.interviewInvitationsLink',
              hrefParams: {
                x: xToken
              },
              title: 'header.interviewInvitationsTitle',
              text: 'header.interviewInvitationsText'
            },
            {
              href: 'header.linaJobAlertLink',
              hrefParams: {
                x: xToken
              },
              title: 'header.linaJobAlertTitle',
              text: 'header.linaJobAlertText',
              hasDivider: true
            },
            {
              href: 'header.careerEnhancersLink',
              title: 'header.careerEnhancersTitle',
              text: 'header.careerEnhancersText',
              isSectionHeader: true
            },
            {
              href: 'header.priorityApplicationLink',
              hrefParams: {
                x: xToken
              },
              title: 'header.priorityApplicationTitle',
              text: 'header.priorityApplicationText'
            },
            {
              href: 'header.englishAssessmentLink',
              hrefParams: {
                x: xToken
              },
              title: 'header.englishAssessmentTitle',
              text: 'header.englishAssessmenetText'
            },
            {
              href: 'header.careerResourcesLink',
              title: 'header.careerResourcesTitle',
              text: 'header.careerResourcesText',
              hasDivider: true
            },
            {
              href: 'header.facebookFriendsLink',
              hrefParams: {
                x: xToken
              },
              title: 'header.facebookFriendsTitle',
              text: 'header.facebookFriendsText',
              hasIcon: true
            }
          ]
        };
      }

      return { ...link };
    });
  }

  return userLoggedOutNavLinks;
};

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
          hideOnMobile: true
        },
        {
          href: 'header.myAccountLink',
          hrefParams: {
            id: xToken
          },
          title: 'header.myAccountTitle',
          text: 'header.myAccountText',
          hideOnMobile: true
        },
        {
          href: 'header.changePasswordLink',
          hrefParams: {
            x: xToken
          },
          title: 'header.changePasswordTitle',
          text: 'header.changePasswordText',
          onlyOnMobile: true
        }
      ]
    }
  ] : userLoggedOutLinks;
};

export default {
  getNavLinks,
  getUserLinks
};
