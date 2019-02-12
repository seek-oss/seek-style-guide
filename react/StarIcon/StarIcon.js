import styles from './StarIcon.less';

import svgMarkup from './StarIcon.svg';
import svgMarkupFilled from './StarIconFilled.svg';
import svgMarkupHalf from './StarIconHalf.svg';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Icon from '../private/Icon/Icon';

import withTextProps, { SizePropTypes } from '../private/withTextProps';

const getMarkup = ({ filled, half }) => {
  if (filled) {
    return svgMarkupFilled;
  }

  if (half) {
    return svgMarkupHalf;
  }

  return svgMarkup;
};

function StarIcon({
  filled,
  half,
  _large,
  className,
  svgClassName,
  size,
  ...props
}) {
  return (
    <Icon
      {...props}
      size={size}
      markup={getMarkup({ filled, half })}
      className={classnames({
        [styles._large]: _large,
        [styles.filled]: filled,
        [styles[size]]: size,
        [className]: className
      })}
      svgClassName={classnames({
        [styles.svg]: true,
        [styles[`${size}Svg`]]: size,
        [svgClassName]: svgClassName
      })}
    />
  );
}

StarIcon.displayName = 'StarIcon';

StarIcon.propTypes = {
  filled: PropTypes.bool,
  half: PropTypes.bool,
  _large: PropTypes.bool,
  className: PropTypes.string,
  ...SizePropTypes
};

StarIcon.defaultProps = {
  filled: false,
  half: false,
  _large: false,
  className: ''
};

export default withTextProps(StarIcon);
