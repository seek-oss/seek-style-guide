import { getCookieFromString } from './utils';

describe('getCookieFromString(key, cookieString)', () => {
  it('should get the key from the cookie string', () => {
    const cookieString =
      'Foo=bar; JobseekerVisitorId=23fba469f32dfd44602bcda9c520bed7; Baz=qux;';
    const visitorId = '23fba469f32dfd44602bcda9c520bed7';
    const result = getCookieFromString('JobseekerVisitorId', cookieString);
    expect(result).toEqual(visitorId);
  });

  it('when the key does not exist, it should return null', () => {
    const cookieString = 'Foo=bar;';
    const result = getCookieFromString('Baz', cookieString);
    expect(result).toBeNull();
  });

  it('when the string is empty, it should return null', () => {
    const cookieString = '';
    const result = getCookieFromString('Baz', cookieString);
    expect(result).toBeNull();
  });
});
