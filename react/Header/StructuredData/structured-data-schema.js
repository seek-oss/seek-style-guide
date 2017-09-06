import concat from 'lodash/concat';

const auOrgSchema = {
  sameAs: [
    'https://www.instagram.com/seekau/',
    'https://twitter.com/seekjobs',
    'https://plus.google.com/+seekau'
  ],
  telephone: '+61-1300-658-700',
  url: 'https://www.seek.com.au'
};

const nzOrgSchema = {
  sameAs: [
    'https://www.instagram.com/seeknz/',
    'https://twitter.com/seekjobsnz',
    'https://plus.google.com/+seeknz'
  ],
  telephone: '+64-0508-733-569',
  url: 'https://www.seek.co.nz/'
};

const generateOrgSchema = (locale = 'AU') => {
  const { telephone, sameAs, url } = locale === 'NZ' ? nzOrgSchema : auOrgSchema;
  return {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    url,
    legalName: 'Seek Limited',
    logo: 'https://seekcdn.com/search/houston/1.0.2162/seek-icon-logo.png',
    sameAs: concat([
      'https://www.facebook.com/SEEK/',
      'https://en.wikipedia.org/wiki/Seek_Limited',
      'https://www.youtube.com/user/SEEKJobs',
      'https://au.linkedin.com/company/seek'
    ], sameAs),
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

export default generateOrgSchema;

