import styles from '../Button/Button.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function ButtonGroup({ className, children, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classnames({ [className]: className, [styles.group]: true })}
    >
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
