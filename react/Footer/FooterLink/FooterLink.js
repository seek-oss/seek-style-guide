import styles from './FooterLink.less';

import React, { PropTypes } from 'react';

export default function FooterLink({ partner, analytics, className, linkRenderer, ...props }) {
  return (
    <li className={className}>
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
