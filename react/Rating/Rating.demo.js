import Rating from './Rating';

export default {
  route: '/rating',
  title: 'Rating',
  category: 'Typography',
  component: Rating,
  initialProps: {
    rating: 0
  },
  options: [
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
    }
  ]
};
