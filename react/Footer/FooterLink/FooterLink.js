import styles from './FooterLink.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_PENDING
} from '../../private/authStatusTypes';
import urlForAuthStatus from '../../private/urlForAuthStatus';
import Badge from '../../Badge/Badge';

export default function FooterLink({
  secondary,
  partner,
  analytics,
  className,
  linkRenderer,
  href,
  newBadge,
  authRequired,
  authenticationStatus,
  ...props
}) {
  return (
    <li className={classnames(className, { [styles.secondary]: secondary })}>
      {linkRenderer({
        'data-analytics': analytics,
        className: styles.link,
        href: authRequired
          ? urlForAuthStatus(authenticationStatus, href)
          : href,
        ...props
      })}
      {newBadge && (
        <span>
          &nbsp;&nbsp;
          <Badge children="New" strong tone="info" />
        </span>
      )}
      {partner ? (
        <span className={styles.partnerCountry}>{` — ${partner}`}</span>
      ) : null}
    </li>
  );
}

FooterLink.propTypes = {
  secondary: PropTypes.bool,
  analytics: PropTypes.string,
  href: PropTypes.string,
  newBadge: PropTypes.bool,
  className: PropTypes.string,
  partner: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  linkRenderer: PropTypes.func.isRequired,
  authRequired: PropTypes.bool,
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
