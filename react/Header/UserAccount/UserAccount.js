import styles from './UserAccount.less';
import React, { PropTypes } from 'react';

import ChevronIcon from '../../icons/ChevronIcon/ChevronIcon';
import ScreenReaderOnly from '../../Accessibility/ScreenReaderOnly';
import UserAccountMenu from '../UserAccountMenu/UserAccountMenu';

export default function UserAccount({ userName, linkRenderer }) {
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
        <span className={styles.userName} data-automation="user-account-name" data-hj-masked={true}>{ userName }</span>
        <ChevronIcon direction="down" className={styles.chevron} svgClassName={styles.chevronSvg} />
      </label>

      <div className={styles.toggleContainer}>
        <UserAccountMenu linkRenderer={linkRenderer} />
      </div>

    </nav>
  );
}

UserAccount.propTypes = {
  userName: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired
};
