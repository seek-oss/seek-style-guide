import React from 'react';
import mapKeys from 'lodash/mapKeys';
import lessToJs from 'less-vars-to-js';
import type from '!!raw-loader!seek-style-guide/theme/type/type.less';
import Text from './Text';

const sizes = [
  'hero',
  'headline',
  'heading',
  'subheading',
  'superstandard',
  'standard',
  'substandard',
  'small'
];
const typeVars = lessToJs(type);
const baseFontSize = parseInt(typeVars['@base-font-size'], 10);
const symbolNames = sizes.reduce((obj, size, i) => {
  const [ firstChar, ...restChars ] = size;
  const name = `${firstChar.toUpperCase()}${restChars.join('')}`;

  const desktopSize = parseFloat(typeVars[`@${size}-type-scale`]) * baseFontSize;
  const mobileSize = parseFloat(typeVars[`@${size}-type-scale-mobile`]) * baseFontSize;

  const symbolName = `${i + 1}. ${name} — Desktop: ${desktopSize}px, Mobile: ${mobileSize}px`;

  return { ...obj, [size]: symbolName };
}, {});

export const text = {
  [`${symbolNames.hero}`]: <Text hero>Hero text</Text>,
  [`${symbolNames.headline}`]: <Text headline>Headline text</Text>,
  [`${symbolNames.heading}`]: <Text heading>Heading text</Text>,
  [`${symbolNames.subheading}`]: <Text subheading>Subheading text</Text>,
  [`${symbolNames.superstandard}/1. Default`]: <Text superstandard>Superstandard text</Text>,
  [`${symbolNames.superstandard}/2. Secondary`]: <Text superstandard secondary>Superstandard critical text</Text>,
  [`${symbolNames.superstandard}/3. Strong`]: <Text superstandard strong>Superstandard strong text</Text>,
  [`${symbolNames.superstandard}/4. Positive`]: <Text superstandard positive>Superstandard positive text</Text>,
  [`${symbolNames.superstandard}/5. Critical`]: <Text superstandard critical>Superstandard critical text</Text>,
  [`${symbolNames.standard}/1. Default`]: <Text>Standard text</Text>,
  [`${symbolNames.standard}/2. Secondary`]: <Text secondary>Standard critical text</Text>,
  [`${symbolNames.standard}/3. Strong`]: <Text strong>Standard strong text</Text>,
  [`${symbolNames.standard}/4. Positive`]: <Text positive>Standard positive text</Text>,
  [`${symbolNames.standard}/5. Critical`]: <Text critical>Standard critical text</Text>,
  [`${symbolNames.substandard}/1. Default`]: <Text substandard>Substandard text</Text>,
  [`${symbolNames.substandard}/2. Secondary`]: <Text substandard secondary>Substandard critical text</Text>,
  [`${symbolNames.substandard}/3. Strong`]: <Text substandard strong>Substandard strong text</Text>,
  [`${symbolNames.substandard}/4. Positive`]: <Text substandard positive>Substandard positive text</Text>,
  [`${symbolNames.substandard}/5. Critical`]: <Text substandard critical>Substandard critical text</Text>,
  [`${symbolNames.small}`]: <Text small>Small text</Text>
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(text, (value, key) => `Text/${key}`);
