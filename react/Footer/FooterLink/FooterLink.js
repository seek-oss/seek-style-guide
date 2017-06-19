import styles from './FooterLink.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../../private/authStatusTypes';

export default function FooterLink({ secondary, partner, analytics, className, linkRenderer, href, authedHref, authenticationStatus, ...props }) {
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
          href: authenticationStatus === AUTHENTICATED && authedHref || href,
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
  linkRenderer: PropTypes.func.isRequired,
  authedHref: PropTypes.string,
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ])
};

FooterLink.defaultProps = {
  secondary: false,
  authenticationStatus: AUTH_PENDING
};
