export default (url, returnUrl) => {
  const urlSuffix = returnUrl
    ? `?returnUrl=${encodeURIComponent(returnUrl)}`
    : '';

  return `${url}${urlSuffix}`;
};
