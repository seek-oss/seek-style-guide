import { cloneElement } from 'react';

const sizes = [
  'Standard',
  'Large',
  'Subheading',
  'Heading',
  'Headline',
  'Hero'
];

export default (name, element) => {
  const symbols = sizes.map((size, i) => {
    return {
      [`icons/${name}/${i + 1}. ${size}`]: cloneElement(element, {
        size: size.toLowerCase()
      })
    };
  });

  return Object.assign({}, ...symbols);
};
