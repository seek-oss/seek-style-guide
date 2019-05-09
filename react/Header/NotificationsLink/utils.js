export function getCookieFromString(name, str) {
  const value = `; ${str}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts
      .pop()
      .split(';')
      .shift();
  }
  return null;
}
