import styles from './UserAccountMenu.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ProfileIcon from '../../ProfileIcon/ProfileIcon';
import HeartIcon from '../../HeartIcon/HeartIcon';
import StarIcon from '../../StarIcon/StarIcon';

const clearLocalStorage = () => {
  if (window && window.localStorage) {
    localStorage.clear();
  }
};

export default function UserAccountMenu({ linkRenderer }) {
  return (
    <ul className={styles.root}>
      <li>
        {
          linkRenderer({
            className: styles.item,
            href: '/profile/',
            children: [
              <span key="label">Your profile</span>,
              <ProfileIcon
                key="icon"
                className={classnames(styles.icon, styles.profile)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      <li>
        {
          linkRenderer({
            className: `${styles.item} ${styles.subItem}`,
            href: '/myactivity#favourite',
            children: [
              <span key="label">Saved searches</span>,
              <HeartIcon
                key="icon"
                className={classnames(styles.icon, styles.saveSearches)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      <li>
        {
          linkRenderer({
            className: `${styles.item} ${styles.subItem}`,
            href: '/my-activity/saved-jobs',
            children: [
              <span key="label">Saved jobs</span>,
              <StarIcon
                key="icon"
                className={classnames(styles.icon, styles.saveJobs)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      <li>
        {
          linkRenderer({
            className: `${styles.item} ${styles.subItem}`,
            href: '/my-activity/applied-jobs',
            children: [
              'Applied jobs',
              <div key="iconSpacer" className={styles.iconSpacer} />
            ]
          })
        }
      </li>
      <li>
        {
          linkRenderer({
            className: styles.item,
            href: '/settings/',
            children: [
              'Settings',
              <div key="iconSpacer" className={styles.iconSpacer} />
            ]
          })
        }
      </li>
      <li>
        {
          linkRenderer({
            className: styles.item,
            onClick: clearLocalStorage,
            href: '/Login/Logout',
            children: [
              'Sign out',
              <div key="iconSpacer" className={styles.iconSpacer} />
            ]
          })
        }
      </li>
    </ul>
  );
}

UserAccountMenu.propTypes = {
  linkRenderer: PropTypes.func.isRequired
};
