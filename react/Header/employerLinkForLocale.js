export default locale =>
  /^nz$/i.test(locale)
    ? 'https://talent.seek.co.nz/'
    : 'https://talent.seek.com.au/';
