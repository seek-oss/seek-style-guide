import styles from './UserAccount.less';
import React, { PropTypes } from 'react';

import ChevronIcon from '../../ChevronIcon/ChevronIcon';
import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';
import UserAccountMenu from '../UserAccountMenu/UserAccountMenu';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../authStatusTypes';

export default function UserAccount({ locale, authenticationStatus, userName = 'Menu', linkRenderer }) {
  const mobileMenuLabel = authenticationStatus === AUTH_PENDING ? '' : userName;
  const desktopMenuLabel = userName;

  return (
    <nav
      role="navigation"
      aria-labelledby="UserMenu"
      data-automation="user-account"
      className={styles.root}>

      <ScreenReaderOnly>
        <h1 id="UserMenu">User menu</h1>
      </ScreenReaderOnly>

      <input
        id="user-account-menu-toggle"
        autoComplete="off"
        className={styles.toggle}
        type="checkbox"
      />

      <div className={styles.menuBackdrop}>
        <label
          data-automation="user-account-menu-backdrop"
          htmlFor="user-account-menu-toggle"
          className={styles.menuBackdropLabel}>
          <ScreenReaderOnly>Show user menu</ScreenReaderOnly>
        </label>
      </div>

      <label data-automation="user-account-menu-toggle" className={styles.toggleLabel} htmlFor="user-account-menu-toggle">
        <ScreenReaderOnly>Show user menu</ScreenReaderOnly>
        <span data-hj-masked={true}>
          <span className={styles.mobileMenuLabel}>{ mobileMenuLabel }</span>
          <span className={styles.desktopMenuLabel} data-automation="user-account-name">{ desktopMenuLabel }</span>
        </span>
        <ChevronIcon direction="down" className={styles.chevron} svgClassName={styles.chevronSvg} />
      </label>

      <div className={styles.toggleContainer}>
        <UserAccountMenu
          locale={locale}
          authenticationStatus={authenticationStatus}
          linkRenderer={linkRenderer}
        />
      </div>

    </nav>
  );
}

UserAccount.propTypes = {
  locale: PropTypes.oneOf(['AU', 'NZ']),
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ]),
  userName: PropTypes.string,
  linkRenderer: PropTypes.func.isRequired
};
