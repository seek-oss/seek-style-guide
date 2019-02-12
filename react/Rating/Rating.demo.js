import Rating from './Rating';
import React from 'react';

const Description = () => <span>overall rating</span>;

export default {
  route: '/rating',
  title: 'Rating',
  category: 'Typography',
  component: Rating,
  initialProps: {
    hero: true,
    rating: 0
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Show rating text',
          transformProps: ({ ...props }) => ({
            ...props,
            showTextRating: true
          })
        },
        {
          label: 'Show rating text with description',
          transformProps: ({ ...props }) => ({
            ...props,
            showTextRating: true,
            description: <Description />
          })
        }
      ]
    },
    {
      label: 'Ratings',
      type: 'radio',
      states: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(rating => ({
        label: `${String(rating)} Stars`,
        transformProps: props => ({
          ...props,
          rating
        })
      }))
    },
    {
      label: 'Size',
      type: 'radio',
      states: ['Hero', 'Headline', 'Heading', 'Large', 'Standard', 'Small'].map(
        size => ({
          label: `${String(size)}`,
          transformProps: ({ hero, ...props }) => ({
            ...props,
            [size.toLowerCase()]: true
          })
        })
      )
    }
  ]
};
