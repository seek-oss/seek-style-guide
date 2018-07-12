import React from 'react';
import mapKeys from 'lodash/mapKeys';
import lessToJs from 'less-vars-to-js';
import type from '!!raw-loader!seek-style-guide/theme/type/type.less';
import Text from './Text';
import TextLink from '../TextLink/TextLink';

const sizes = [
  'hero',
  'headline',
  'heading',
  'subheading',
  'large',
  'standard',
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
  [`${symbolNames.large}`]: <Text large>Large text</Text>,
  [`${symbolNames.standard}/1. Default`]: <Text>Standard text</Text>,
  [`${symbolNames.standard}/2. Secondary`]: <Text secondary>Standard critical text</Text>,
  [`${symbolNames.standard}/3. Strong`]: <Text strong>Standard strong text</Text>,
  [`${symbolNames.standard}/4. Positive`]: <Text positive>Standard positive text</Text>,
  [`${symbolNames.standard}/5. Critical`]: <Text critical>Standard critical text</Text>,
  [`${symbolNames.standard}/6. Link`]: <Text><TextLink href="#">Standard link text</TextLink></Text>,
  [`${symbolNames.small}`]: <Text small>Small text</Text>
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(text, (value, key) => `Text/${key}`);
