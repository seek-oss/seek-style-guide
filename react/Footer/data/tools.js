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
    href: '/myactivity#favourite',
    rel: 'nofollow',
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
    name: 'Advice & tips',
    href: '/career-advice/',
    analytics: 'toolbar:advice+tips'
  },
  {
    name: 'Company reviews',
    href: '/companies/',
    analytics: 'toolbar:companies',
    specificLocale: 'AU'
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
    href: 'https://www.seeklearning.com.au/?campaigncode=seek_banner_29&sc_trk=skj-courses-link',
    analytics: 'toolbar:courses',
    specificLocale: 'AU'
  },
  {
    name: 'Courses',
    href: 'https://www.seeklearning.co.nz/?campaigncode=seek_banner_29&sc_trk=skj-courses-link',
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
    href: 'https://www.volunteer.co.nz/?tracking=SKMNZ:main+header',
    analytics: 'toolbar:volunteering',
    specificLocale: 'NZ'
  }
];
