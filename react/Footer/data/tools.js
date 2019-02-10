export default [
  {
    name: 'Job search',
    href: '/',
    analytics: 'toolbar:jobs'
  },
  {
    name: 'Profile',
    href: '/profile/',
    analytics: 'toolbar:profile'
  },
  {
    name: 'Saved searches',
    href: '/my-activity/saved-searches',
    rel: 'nofollow',
    authRequired: true,
    analytics: 'toolbar:my+activity'
  },
  {
    name: 'Saved jobs',
    href: '/my-activity/saved-jobs',
    rel: 'nofollow',
    authRequired: true,
    analytics: 'toolbar:favourite'
  },
  {
    name: 'Applied jobs',
    href: '/my-activity/applied-jobs',
    rel: 'nofollow',
    authRequired: true,
    analytics: 'toolbar:applied'
  },
  {
    name: 'Career Advice',
    href: '/career-advice/',
    analytics: 'toolbar:advice+tips'
  },
  {
    name: 'Explore Careers',
    href:
      'https://www.seek.com.au/career-guide/?campaigncode=seek_banner_29&sc_trk=skj-career-guide-link',
    analytics: 'toolbar:career+guide',
    specificLocale: 'AU',
    newBadge: true
  },
  {
    name: 'Company reviews',
    href: '/companies/',
    analytics: 'toolbar:companies',
    specificLocale: 'AU'
  }
];

export const seekApps = [
  {
    name: 'iOS',
    href: 'https://itunes.apple.com/au/app/seek-jobs/id520400855?mt=8',
    specificLocale: 'AU'
  },
  {
    name: 'iOS',
    href: 'https://itunes.apple.com/nz/app/seek-job-search/id520400855?mt=8',
    specificLocale: 'NZ'
  },
  {
    name: 'Android',
    href: 'https://play.google.com/store/apps/details?id=au.com.seek&hl=en_AU'
  }
];

export const seekSites = [
  {
    name: 'Employer site',
    href: 'https://talent.seek.com.au/',
    analytics: 'toolbar:post+a+job+ad',
    specificLocale: 'AU'
  },
  {
    name: 'Employer site',
    href: 'https://talent.seek.co.nz/',
    analytics: 'toolbar:post+a+job+ad',
    specificLocale: 'NZ'
  },
  {
    name: 'SEEK NZ',
    href: 'https://www.seek.co.nz/',
    analytics: 'toolbar:nz+homepage',
    specificLocale: 'AU'
  },
  {
    name: 'SEEK AU',
    href: 'https://www.seek.com.au/',
    analytics: 'toolbar:au+homepage',
    specificLocale: 'NZ'
  },
  {
    name: 'Courses',
    href:
      'https://www.seek.com.au/learning/?campaigncode=seek_banner_29&sc_trk=skj-courses-link',
    analytics: 'toolbar:courses',
    specificLocale: 'AU'
  },
  {
    name: 'Courses',
    href:
      'https://www.seeklearning.co.nz/?campaigncode=seek_banner_29&sc_trk=skj-courses-link',
    analytics: 'toolbar:courses',
    specificLocale: 'NZ'
  },
  {
    name: 'Business for sale',
    href: 'https://www.seekbusiness.com.au/?tracking=sk:main:au:nav:bus',
    analytics: 'toolbar:business+for+sale',
    specificLocale: 'AU'
  },
  {
    name: 'Business for sale',
    href: 'https://www.seekbusiness.co.nz/?tracking=sk:main:nz:nav:bus',
    analytics: 'toolbar:business+for+sale',
    specificLocale: 'NZ'
  },
  {
    name: 'Volunteering',
    href: 'https://www.volunteer.com.au/?tracking=SKMAU:main+header',
    analytics: 'toolbar:volunteering',
    specificLocale: 'AU'
  },
  {
    name: 'Volunteering',
    href: 'https://seekvolunteer.co.nz/?tracking=SKMNZ:main+header',
    analytics: 'toolbar:volunteering',
    specificLocale: 'NZ'
  }
];
