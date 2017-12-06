import styles from './Rating.less';

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import StarIcon from '../StarIcon/StarIcon';
import HalfStarIcon from './HalfStarIcon.svg';
import Icon from '../private/Icon/Icon';

import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import Text from '../Text/Text';

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

const Rating = ({ rating, starClassName, size, showTextRating, ...restProps }) => {
  const extendedStarClassName = classnames(
    starClassName,
    { [styles[size]]: size }
  );

  return (
    <Text raw baseline={true} {...{ [size]: true }} regular {...restProps}>
      <ScreenReaderOnly>
        {rating} out of 5
      </ScreenReaderOnly>
      <span className={styles.root}>
        {[...Array(5)].map((v, position) => {
          const percent = getPercent(rating, position);
          return getStar(percent, position, extendedStarClassName);
        })}
        {showTextRating &&
          <span className={styles.textRating}>{rating}</span>
        }
      </span>
    </Text>
  );
};

Rating.displayName = 'Rating';

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
  starClassName: PropTypes.string,
  size: PropTypes.oneOf(['heading', 'substandard', 'superstandard']),
  showTextRating: PropTypes.bool
};

Rating.defaultProps = {
  size: 'substandard',
  showTextRating: false
};

export default Rating;
