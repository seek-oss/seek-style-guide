import styles from './StarIcon.less';

import svgMarkup from './StarIcon.svg';
import svgMarkupFilled from './StarIconFilled.svg';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Icon from '../private/Icon/Icon';

import withTextProps, { SizePropTypes } from '../private/withTextProps';

function StarIcon({ filled, className, size, ...props }) {
  const markup = filled ? svgMarkupFilled : svgMarkup;

  const combinedProps = {
    ...props,
    className: classnames({
      [styles.filled]: filled,
      [className]: className
    }),
    svgClassName: classnames({
      [styles[`${size}Svg`]]: size
    })
  };

  return <Icon markup={markup} {...combinedProps} />;
}

StarIcon.displayName = 'StarIcon';

StarIcon.propTypes = {
  filled: PropTypes.bool,
  className: PropTypes.string,
  ...SizePropTypes
};

StarIcon.defaultProps = {
  filled: false,
  className: ''
};

export default withTextProps(StarIcon);
