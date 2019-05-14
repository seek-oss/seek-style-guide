export function getCookieFromString(key, cookieString) {
  const value = `; ${cookieString}`;
  const parts = value.split(`; ${key}=`);
  if (parts.length === 2) {
    return parts
      .pop()
      .split(';')
      .shift();
  }
  return null;
}
