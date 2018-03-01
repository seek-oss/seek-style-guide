import { sortCurrentLocaleToTop } from './localeUtils';

describe('localeUtils', () => {
  describe('sortCurrentLocaleToTop', () => {
    const localeList = [{
      title: 'Hong Kong (English)',
      language: 'en',
      country: 'hk'
    }, {
      title: 'Indonesia (English)',
      language: 'en',
      country: 'id'
    }, {
      title: 'Indonesia (Bahasa)',
      language: 'id',
      country: 'id'
    }, {
      title: 'Singapore (English)',
      language: 'en',
      country: 'sg'
    }];

    it('should sort current locale to top', () => {
      const sortedLocales = sortCurrentLocaleToTop({ locales: localeList, country: 'id', language: 'id' });
      expect(sortedLocales.length).toEqual(localeList.length);
      expect(sortedLocales[0]).toMatchObject({
        language: 'id',
        country: 'id'
      });
    });

    it('should do nothing if current locale is already on top', () => {
      const sortedLocales = sortCurrentLocaleToTop({ locales: localeList, country: 'hk', language: 'en' });
      expect(sortedLocales).toEqual(localeList);
    });

    it('should do nothing if passed invalid country or language', () => {
      const sortedLocales = sortCurrentLocaleToTop({ locales: localeList, country: 'Lothlorien', language: 'Sindarin' });
      expect(sortedLocales).toEqual(localeList);
    });
  });
});
