import styles from './FooterLink.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function FooterLink({ secondary, partner, analytics, className, linkRenderer, ...props }) {
  return (
    <li
      className={classnames(
        className,
        { [styles.secondary]: secondary }
      )}>
      {
        linkRenderer({
          'data-analytics': analytics,
          className: styles.link,
          ...props
        })
      }
      {
        partner ?
          <span className={styles.partnerCountry}>{` — ${partner}`}</span> :
          null
      }
    </li>
  );
}

FooterLink.propTypes = {
  secondary: PropTypes.bool,
  analytics: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  partner: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  linkRenderer: PropTypes.func.isRequired
};

FooterLink.defaultProps = {
  secondary: false
};
