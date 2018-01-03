const baseUrl = 'https://th.jobsdb.com';
const baseUrlWithLanguage = `${baseUrl}/th/th`;
const wpUrlWithLanguage = `${baseUrl}/th-th`;
const mbaseUrl = 'https://m.jobsdb.co.th';
const mUrlWithLanguage = `${mbaseUrl}/en-th`;

export default {
  'footer.copyright': 'สงวนลิขสิทธิ์ 1998-{year} jobsDB',
  'footer.rightReserved': '',
  'footer.siteMapLink': `${baseUrlWithLanguage}/sitemap`,
  'footer.siteMapLinkText': 'แผนที่เว็บไซต์',
  'footer.termsLink': `${wpUrlWithLanguage}/pages/terms/terms-conditions`,
  'footer.termsLinkText': 'ข้อกำหนดและเงื่อนไข',
  'footer.privacyLink': `${wpUrlWithLanguage}/pages/terms/privacy-policy`,
  'footer.privacyLinkText': 'คำชี้แจงสิทธิส่วนบุคคล',
  'footer.legalLink': `${mUrlWithLanguage}/legal.do`,
  'footer.legalLinkText': 'ข้อกำหนดทางกฎหมาย'
};
