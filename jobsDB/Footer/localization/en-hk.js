const baseUrl = 'https://hk.jobsdb.com';
const baseUrlWithLanguage = `${baseUrl}/hk/en`;
const wpUrlWithLanguage = `${baseUrl}/en-hk`;
const mbaseUrl = 'https://m.jobsdb.com';
const mUrlWithLanguage = `${mbaseUrl}/en-hk`;

export default {
  'footer.copyright': 'Copyright © 1998-{year}, jobsDB.',
  'footer.rightReserved': 'All Rights Reserved.',
  'footer.siteMapLink': `${baseUrlWithLanguage}/sitemap`,
  'footer.siteMapLinkText': 'Site Map',
  'footer.termsLink': `${wpUrlWithLanguage}/pages/terms/terms-conditions`,
  'footer.termsLinkText': 'Terms & Conditions',
  'footer.privacyLink': `${wpUrlWithLanguage}/pages/terms/privacy-policy`,
  'footer.privacyLinkText': 'Privacy Statement',
  'footer.legalLink': `${mUrlWithLanguage}/legal.do`,
  'footer.legalLinkText': 'Legal terms'
};
