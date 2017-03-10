import styles from './Rating.less';

import React, { PropTypes } from 'react';

import StarIcon from '../StarIcon/StarIcon';
import HalfStarIcon from './HalfStarIcon.svg';
import Icon from '../private/Icon/Icon';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';

const getPercent = (rating, position) => Math.round(Math.min(Math.max(rating - position, 0), 1) * 100);

const getStar = (percent, key, starClassName) => {
  const props = {
    key,
    className: styles.star,
    svgClassName: starClassName
  };

  if (percent >= 75) {
    return <StarIcon filled={true} {...props} />;
  }

  if (percent >= 25) {
    return <Icon markup={HalfStarIcon} {...props} />;
  }

  return <StarIcon {...props} />;
};

const Rating = ({ rating, starClassName, ...restProps }) => {
  return (
    <div {...restProps}>
      <ScreenReaderOnly>
        {rating} out of 5
      </ScreenReaderOnly>
      {[...Array(5)].map((v, position) => {
        const percent = getPercent(rating, position);
        return getStar(percent, position, starClassName);
      })}
    </div>
  );
};

Rating.displayName = 'Rating';

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
  starClassName: PropTypes.string
};

export default Rating;
