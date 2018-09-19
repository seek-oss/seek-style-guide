import styles from './FooterNav.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function FooterNav({ secondary, label, children, className }) {
  return (
    <div
      aria-label={label}
      className={classnames(
        className || styles.category,
        { [styles.secondary]: secondary }
      )}>
      <h5 className={styles.heading}>{label}</h5>
      <ul>
        { children }
      </ul>
    </div>
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
