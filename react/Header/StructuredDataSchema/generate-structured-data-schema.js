const auOrgSchema = {
  socialLinks: [
    'https://www.instagram.com/seekau/',
    'https://twitter.com/seekjobs',
    'https://plus.google.com/+seekau',
    'https://au.linkedin.com/company/seek'
  ],
  telephone: '+61-1300-658-700',
  url: 'https://www.seek.com.au'
};

const nzOrgSchema = {
  socialLinks: [
    'https://www.instagram.com/seeknz/',
    'https://twitter.com/seekjobsnz',
    'https://plus.google.com/+seeknz',
    'https://nz.linkedin.com/company/seek'
  ],
  telephone: '+64-0508-733-569',
  url: 'https://www.seek.co.nz/'
};

const commonSocialLinks = [
  'https://www.facebook.com/SEEK/',
  'https://en.wikipedia.org/wiki/Seek_Limited',
  'https://www.youtube.com/user/SEEKJobs'
];

const generateStructureDataSchema = (locale = 'AU') => {
  const { telephone, socialLinks, url } =
    locale === 'NZ' ? nzOrgSchema : auOrgSchema;

  return {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    url,
    legalName: 'Seek Limited',
    logo: 'https://www.seek.com.au/content/images/logos/seek-logo-positive.svg',
    sameAs: [...commonSocialLinks, ...socialLinks],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone,
        contactType: 'customer service',
        contactOption: 'TollFree'
      }
    ]
  };
};

export default generateStructureDataSchema;
