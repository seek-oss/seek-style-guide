import React from 'react';
import mapKeys from 'lodash/mapKeys';
import Text from './Text';

export const text = {
  '1. Hero — Desktop: 42px, Mobile: 21px': <Text hero>Hero text</Text>,
  '2. Headline — Desktop: 28px, Mobile: 21px': <Text headline>Headline text</Text>,
  '3. Heading — Desktop: 21px, Mobile: 21px': <Text heading>Heading text</Text>,
  '4. Subheading — Desktop: 18px, Mobile: 21px': <Text subheading>Subheading text</Text>,
  '5. Superstandard — Desktop: 18px, Mobile: 18px/1. Default': <Text superstandard>Superstandard text</Text>,
  '5. Superstandard — Desktop: 18px, Mobile: 18px/2. Secondary': <Text superstandard secondary>Superstandard critical text</Text>,
  '5. Superstandard — Desktop: 18px, Mobile: 18px/3. Strong': <Text superstandard strong>Superstandard strong text</Text>,
  '5. Superstandard — Desktop: 18px, Mobile: 18px/4. Positive': <Text superstandard positive>Superstandard positive text</Text>,
  '5. Superstandard — Desktop: 18px, Mobile: 18px/5. Critical': <Text superstandard critical>Superstandard critical text</Text>,
  '6. Standard — Desktop: 14px, Mobile: 18px/1. Default': <Text>Standard text</Text>,
  '6. Standard — Desktop: 14px, Mobile: 18px/2. Secondary': <Text secondary>Standard critical text</Text>,
  '6. Standard — Desktop: 14px, Mobile: 18px/3. Strong': <Text strong>Standard strong text</Text>,
  '6. Standard — Desktop: 14px, Mobile: 18px/4. Positive': <Text positive>Standard positive text</Text>,
  '6. Standard — Desktop: 14px, Mobile: 18px/5. Critical': <Text critical>Standard critical text</Text>,
  '7. Substandard — Desktop: 14px, Mobile: 14px/1. Default': <Text substandard>Substandard text</Text>,
  '7. Substandard — Desktop: 14px, Mobile: 14px/2. Secondary': <Text substandard secondary>Substandard critical text</Text>,
  '7. Substandard — Desktop: 14px, Mobile: 14px/3. Strong': <Text substandard strong>Substandard strong text</Text>,
  '7. Substandard — Desktop: 14px, Mobile: 14px/4. Positive': <Text substandard positive>Substandard positive text</Text>,
  '7. Substandard — Desktop: 14px, Mobile: 14px/5. Critical': <Text substandard critical>Substandard critical text</Text>,
  '8. Small — Desktop: 12px, Mobile: 12px': <Text small>Small text</Text>
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(text, (value, key) => `Text/${key}`);
