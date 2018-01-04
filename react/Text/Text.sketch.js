import React from 'react';
import mapKeys from 'lodash/mapKeys';
import Text from './Text';

export const text = {
  'Screaming': <Text screaming>Screaming text</Text>,
  'Yelling': <Text yelling>Yelling text</Text>,
  'Shouting': <Text shouting>Shouting text</Text>,
  'Waving': <Text waving>Waving text</Text>,
  'Whistling': <Text whistling>Whistling text</Text>,
  'Whispering (Title)': <Text whisperingTitle>Whispering (Title) text</Text>,
  'Loud': <Text loud>Loud text</Text>,
  'Intimate': <Text intimate>Intimate text</Text>,
  'Whispering': <Text whispering>Whispering text</Text>
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(text, (value, key) => `Text/${key}`);
