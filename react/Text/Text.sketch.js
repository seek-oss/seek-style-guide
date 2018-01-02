import React from 'react';
import mapKeys from 'lodash/mapKeys';
import Text from './Text';

export const text = {
  'Shouting': <Text shouting>Shouting text</Text>
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(text, (value, key) => `Text/${key}`);
