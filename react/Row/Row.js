import styles from './Row.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

const lessThan10 = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName];
    if (typeof value === 'number') {
      return value < 10 ? null : new Error(`${propName} in ${componentName} should be < 10`);
    }
  }

  return null;
};

export default function Row({ children, className, top = 1, bottom = 1, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles[`top-${top}`]]: top,
        [styles[`bottom-${bottom}`]]: bottom
      })}>
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  top: lessThan10,
  bottom: lessThan10
};
