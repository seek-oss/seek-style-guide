import styles from './UserAccountMenu.less';

import React from 'react';
import PropTypes from 'prop-types';

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
              <ProfileIcon key="icon" className={styles.icon} svgClassName={styles.iconSvg} />
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
              <HeartIcon key="icon" className={styles.icon} svgClassName={styles.iconSvg} />
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
              <StarIcon key="icon" className={styles.icon} svgClassName={styles.iconSvg} />
            ]
          })
        }
      </li>
      <li>
        {
          linkRenderer({
            className: `${styles.item} ${styles.subItem}`,
            href: '/my-activity/applied-jobs',
            children: 'Applied jobs'
          })
        }
      </li>
      <li>
        {
          linkRenderer({
            className: styles.item,
            href: '/settings/',
            children: 'Settings'
          })
        }
      </li>
      <li>
        {
          linkRenderer({
            className: styles.item,
            onClick: clearLocalStorage,
            href: '/Login/Logout',
            children: 'Sign out'
          })
        }
      </li>
    </ul>
  );
}

UserAccountMenu.propTypes = {
  linkRenderer: PropTypes.func.isRequired
};
