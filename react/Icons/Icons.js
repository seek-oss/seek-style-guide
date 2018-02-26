import styles from './Icons.less';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../private/Icon/Icon';

export const iconGenerator = IconName => {
  const IconExportable = ({ filled, direction, className, ...props }) => {
    const markup = require(`./svg/${IconName}${filled ? 'Filled' : ''}.svg`);

    const combinedProps = {
      ...props,
      className: classnames({
        [styles[IconName]]: true,
        [styles.filled]: filled,
        [className]: className,
        [styles[direction]]: direction
      })
    };

    return <Icon markup={markup} {...combinedProps} />;
  };

  IconExportable.displayName = IconName;

  IconExportable.propTypes = {
    filled: PropTypes.bool,
    className: PropTypes.string,
    direction: PropTypes.oneOf([
      'up', 'down', 'right', 'left'
    ])
  };

  IconExportable.defaultProps = {
    filled: false,
    className: ''
  };

  return IconExportable;
};
