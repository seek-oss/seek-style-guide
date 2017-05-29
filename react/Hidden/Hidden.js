import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Hidden.less';

const Hidden = ({ children, className, print, screen, mobile, desktop }) => (
  <span
    className={classNames(
      className,
      {
        [styles.desktop]: desktop,
        [styles.mobile]: mobile,
        [styles.print]: print,
        [styles.screen]: screen
      }
    )}>{children}</span>
);

Hidden.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  desktop: PropTypes.bool,
  mobile: PropTypes.bool,
  print: PropTypes.bool,
  screen: PropTypes.bool
};

Hidden.defaultProps = {
  className: '',
  desktop: false,
  mobile: false,
  print: false,
  screen: false
};

export default Hidden;
