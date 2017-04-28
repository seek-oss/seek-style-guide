import styles from './FooterNav.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function FooterNav({ secondary, label, children, className }) {
  return (
    <nav
      aria-label={label}
      className={classnames(
        className || styles.category,
        { [styles.secondary]: secondary },
      )}>
      <h1 className={styles.heading}>{label}</h1>
      <ul>
        { children }
      </ul>
    </nav>
  );
}

FooterNav.propTypes = {
  secondary: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

FooterNav.defaultProps = {
  secondary: false
};
