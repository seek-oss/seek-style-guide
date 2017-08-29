import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Hidden.less';

const Hidden = ({ children, component, className, print, screen, mobile, desktop }) => {
  const Component = component ? component : 'span';

  return (
    <Component
      className={classNames({
        [className]: className,
        [styles.desktop]: desktop,
        [styles.mobile]: mobile,
        [styles.print]: print,
        [styles.screen]: screen
      })}>
      {children}
    </Component>
  );
};

Hidden.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),
  className: PropTypes.string,
  desktop: PropTypes.bool,
  mobile: PropTypes.bool,
  print: PropTypes.bool,
  screen: PropTypes.bool
};

Hidden.defaultProps = {
  className: '',
  component: 'span',
  desktop: false,
  mobile: false,
  print: false,
  screen: false
};

export default Hidden;
