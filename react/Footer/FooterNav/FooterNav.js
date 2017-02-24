import styles from './FooterNav.less';

import React, { PropTypes } from 'react';

export default function FooterNav({ label, children, className }) {
  return (
    <nav aria-label={label} className={className || styles.category}>
      <h1 className={styles.heading}>{label}</h1>
      <ul>
        { children }
      </ul>
    </nav>
  );
}

FooterNav.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
