const baseUrl = 'https://th.jobsdb.com';
const baseUrlWithLanguage = `${baseUrl}/th/en`;
const wpUrlWithLanguage = `${baseUrl}/en-th`;
const mbaseUrl = 'https://m.jobsdb.co.th';
const mUrlWithLanguage = `${mbaseUrl}/en-th`;

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
