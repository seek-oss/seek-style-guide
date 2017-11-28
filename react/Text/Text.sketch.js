import React from 'react';
import mapKeys from 'lodash/mapKeys';
import Text from './Text';

export const text = {
  'Hero': <Text hero>Hero text</Text>,
  'Headline': <Text headline>Headline text</Text>,
  'Heading': <Text heading>Heading text</Text>,
  'Subheading': <Text subheading>Subheading text</Text>,
  'Standard': <Text>Standard text</Text>,
  'Standard Positive': <Text positive>Standard positive text</Text>,
  'Standard Critical': <Text critical>Standard critical text</Text>,
  'Standard Secondary': <Text secondary>Standard critical text</Text>,
  'Standard Strong': <Text strong>Standard strong text</Text>,
  'Superstandard': <Text superstandard>Superstandard text</Text>,
  'Superstandard Positive': <Text superstandard positive>Superstandard positive text</Text>,
  'Superstandard Critical': <Text superstandard critical>Superstandard critical text</Text>,
  'Superstandard Secondary': <Text superstandard secondary>Superstandard critical text</Text>,
  'Superstandard Strong': <Text superstandard strong>Superstandard strong text</Text>,
  'Substandard': <Text substandard>Substandard text</Text>,
  'Substandard Positive': <Text substandard positive>Substandard positive text</Text>,
  'Substandard Critical': <Text substandard critical>Substandard critical text</Text>,
  'Substandard Secondary': <Text substandard secondary>Substandard critical text</Text>,
  'Substandard Strong': <Text substandard strong>Substandard strong text</Text>,
  'Small': <Text small>Small text</Text>
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(text, (value, key) => `Text/${key}`);
