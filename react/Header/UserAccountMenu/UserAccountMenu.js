import styles from './UserAccountMenu.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

import SearchIcon from '../../SearchIcon/SearchIcon';
import ProfileIcon from '../../ProfileIcon/ProfileIcon';
import HeartIcon from '../../HeartIcon/HeartIcon';
import StarIcon from '../../StarIcon/StarIcon';
import ThumbsUpIcon from '../../ThumbsUpIcon/ThumbsUpIcon';
import employerLinkForLocale from '../employerLinkForLocale';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../authStatusTypes';

const clearLocalStorage = () => {
  if (window && window.localStorage) {
    localStorage.clear();
  }
};

export default function UserAccountMenu({ locale, authenticationStatus, linkRenderer }) {
  return (
    <ul className={styles.root}>
      <li className={`${styles.smallDeviceOnly} ${styles.firstItemInGroup}`}>
        {
          linkRenderer({
            className: `${styles.item} ${styles.subItem}`,
            href: '/',
            children: [
              <span key="label">Job search</span>,
              <SearchIcon
                key="icon"
                className={classnames(styles.icon, styles.jobSearch)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      <li>
        {
          linkRenderer({
            className: styles.item,
            href: '/profile/',
            children: [
              <span key="label">Profile</span>,
              <ProfileIcon
                key="icon"
                className={classnames(styles.icon, styles.profile)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      <li className={styles.aboveSmallDevice}>
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
              <span key="label">Saved <span className={styles.smallDeviceOnly}>& applied </span>jobs</span>,
              <StarIcon
                key="icon"
                className={classnames(styles.icon, styles.saveJobs)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      <li className={styles.aboveSmallDevice}>
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
      <li className={styles.smallDeviceOnly}>
        {
          linkRenderer({
            className: `${styles.item} ${styles.subItem}`,
            href: '/recommended',
            children: [
              <span key="label">Recommended jobs</span>,
              <ThumbsUpIcon
                key="icon"
                className={classnames(styles.icon, styles.recommendedJobs)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      <li className={styles.smallDeviceOnly}>
        {
          linkRenderer({
            className: `${styles.item} ${styles.subItem}`,
            href: '/companies/',
            children: [
              'Company reviews',
              <div key="iconSpacer" className={styles.iconSpacer} />
            ]
          })
        }
      </li>
      <li className={styles.aboveSmallDevice}>
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
      <li className={`${styles.smallDeviceOnly} ${styles.firstItemInGroup}`}>
        {
          linkRenderer({
            className: styles.item,
            href: employerLinkForLocale(locale),
            children: [
              'Employer site',
              <div key="iconSpacer" className={styles.iconSpacer} />
            ]
          })
        }
      </li>
      {
        authenticationStatus !== AUTHENTICATED ? null : (
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
        )
      }
    </ul>
  );
}

UserAccountMenu.propTypes = {
  locale: PropTypes.oneOf(['AU', 'NZ']),
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ]),
  linkRenderer: PropTypes.func.isRequired
};
