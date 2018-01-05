const baseUrl = 'https://id.jobsdb.com';
const baseUrlWithLanguage = `${baseUrl}/id/id`;
const wpUrlWithLanguage = `${baseUrl}/id-id`;
const mbaseUrl = 'https://m.jobsdb.co.id';
const mUrlWithLanguage = `${mbaseUrl}/en-id`;

export default {
  'footer.copyright': 'Hak Cipta© 1998-{year}, jobsDB.',
  'footer.rightReserved': 'Semua Hak Dilindungi.',
  'footer.siteMapLink': `${baseUrlWithLanguage}/sitemap`,
  'footer.siteMapLinkText': 'Sitemap',
  'footer.termsLink': `${wpUrlWithLanguage}/pages/terms/terms-conditions`,
  'footer.termsLinkText': 'Syarat dan ketentuan',
  'footer.privacyLink': `${wpUrlWithLanguage}/pages/terms/privacy-policy`,
  'footer.privacyLinkText': 'Pernyataan Privasi',
  'footer.legalLink': `${mUrlWithLanguage}/legal.do`,
  'footer.legalLinkText': 'Syarat Hukum'
};
