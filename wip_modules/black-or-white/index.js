import rgbFromHex from 'hex-rgb';

const THRESHOLD = 120;

export default bgColor => {
  const [ r, g, b ] = rgbFromHex(bgColor);
  const bgDelta = (r * 0.299) + (g * 0.587) + (b * 0.114);

  return ((255 - bgDelta) < THRESHOLD) ? "#000000" : "#ffffff";
};
