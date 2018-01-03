const baseUrl = 'https://id.jobsdb.com';
const baseUrlWithLanguage = `${baseUrl}/id/en`;
const wpUrlWithLanguage = `${baseUrl}/en-id`;
const mbaseUrl = 'https://m.jobsdb.co.id';
const mUrlWithLanguage = `${mbaseUrl}/en-id`;

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
