import Rating from './Rating';

export default {
  route: '/rating',
  title: 'Rating',
  component: Rating,
  initialProps: {
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
        }
      ]
    },
    {
      label: 'Ratings',
      type: 'radio',
      states: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
        .map(rating => ({
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
      states: ['substandard', 'superstandard', 'heading']
        .map(size => ({
          label: `${String(size)}`,
          transformProps: props => ({
            ...props,
            substandard: size === 'substandard',
            superstandard: size === 'superstandard',
            heading: size === 'heading'
          })
        }))
    }
  ]
};
