import styles from './Rating.less';

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import StarIcon from '../StarIcon/StarIcon';
import HalfStarIcon from './HalfStarIcon.svg';
import Icon from '../private/Icon/Icon';

import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import Text from '../Text/Text';

import withTextProps, { SizePropTypes } from '../private/withTextProps';

const getPercent = (rating, position) => Math.round(Math.min(Math.max(rating - position, 0), 1) * 100);

const getStar = (
  percent,
  key,
  starClassName,
  size,
  customStyle
) => {
  const props = {
    key,
    size,
    customStyle,
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

const Rating = ({
  rating,
  starClassName,
  showTextRating,
  size,
  customStyle,
  ...restProps
}) => {
  const extendedStarClassName = classnames({ [starClassName]: starClassName });

  return (
    <Text
      raw
      size={size}
      regular
      {...restProps}>
      <ScreenReaderOnly>
        {rating} out of 5
      </ScreenReaderOnly>
      <span className={styles.rating}>
        {[...Array(5)].map((v, position) => {
          const percent = getPercent(rating, position);
          return getStar(
            percent,
            position,
            extendedStarClassName,
            size,
            customStyle
          );
        })}
        {showTextRating &&
          <span className={styles.textRating}>{rating.toFixed(1)}</span>
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
  showTextRating: PropTypes.bool,
  ...SizePropTypes
};

Rating.defaultProps = {
  showTextRating: false,
  size: 'standard',
  customStyle: 'Star'
};

export default withTextProps(Rating);
