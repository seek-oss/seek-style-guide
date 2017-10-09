import generateStructureDataSchema from './generate-structured-data-schema';

test('should generate default (AU) organisation schema', () => {
  expect(generateStructureDataSchema()).toEqual({
    '@context': 'http://schema.org',
    '@type': 'Organization',
    url: 'https://www.seek.com.au',
    legalName: 'Seek Limited',
    logo: 'https://www.seek.com.au/content/images/logos/seek-logo-positive.svg',
    sameAs: [
      'https://www.facebook.com/SEEK/',
      'https://en.wikipedia.org/wiki/Seek_Limited',
      'https://www.youtube.com/user/SEEKJobs',
      'https://www.instagram.com/seekau/',
      'https://twitter.com/seekjobs',
      'https://plus.google.com/+seekau',
      'https://au.linkedin.com/company/seek'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+61-1300-658-700',
        contactType: 'customer service',
        contactOption: 'TollFree'
      }
    ]
  });
});

test('should generate NZ organisation schema', () => {
  expect(generateStructureDataSchema('NZ')).toEqual({
    '@context': 'http://schema.org',
    '@type': 'Organization',
    url: 'https://www.seek.co.nz/',
    legalName: 'Seek Limited',
    logo: 'https://www.seek.com.au/content/images/logos/seek-logo-positive.svg',
    sameAs: [
      'https://www.facebook.com/SEEK/',
      'https://en.wikipedia.org/wiki/Seek_Limited',
      'https://www.youtube.com/user/SEEKJobs',
      'https://www.instagram.com/seeknz/',
      'https://twitter.com/seekjobsnz',
      'https://plus.google.com/+seeknz',
      'https://nz.linkedin.com/company/seek'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+64-0508-733-569',
        contactType: 'customer service',
        contactOption: 'TollFree'
      }
    ]
  });
});
