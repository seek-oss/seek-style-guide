import styles from './UserAccountMenu.less';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SearchIcon from '../../SearchIcon/SearchIcon';
import ProfileIcon from '../../ProfileIcon/ProfileIcon';
import HeartIcon from '../../HeartIcon/HeartIcon';
import StarIcon from '../../StarIcon/StarIcon';
import ThumbsUpIcon from '../../ThumbsUpIcon/ThumbsUpIcon';
import employerLinkForLocale from '../employerLinkForLocale';
import appendReturnUrl from '../appendReturnUrl';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../authStatusTypes';

const clearLocalStorage = () => {
  if (window && window.localStorage) {
    localStorage.clear();
  }
};

export default function UserAccountMenu({ locale, authenticationStatus, linkRenderer, returnUrl, activeTab }) {
  return (
    <ul className={styles.root}>
      <li className={classnames(styles.smallDeviceOnly, activeTab === 'Job Search' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:jobs',
            className: styles.item,
            href: '/',
            children: [
              <span key="label">Job Search</span>,
              <SearchIcon
                key="icon"
                className={classnames(styles.icon, styles.jobSearch)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      <li className={classnames(activeTab === 'Profile' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:profile',
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
      <li className={classnames(styles.aboveSmallDevice, activeTab === 'Saved Searches' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:saved+searches',
            className: `${styles.item} ${styles.subItem}`,
            href: '/myactivity#favourite',
            children: [
              <span key="label">Saved Searches</span>,
              <HeartIcon
                key="icon"
                className={classnames(styles.icon, styles.saveSearches)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      <li className={classnames(activeTab === 'Saved & Applied Jobs' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:saved+jobs',
            className: `${styles.item} ${styles.subItem}`,
            href: '/my-activity/saved-jobs',
            children: [
              <span key="label">Saved <span className={styles.smallDeviceOnly}>& Applied </span>Jobs</span>,
              <StarIcon
                key="icon"
                className={classnames(styles.icon, styles.saveJobs)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      <li className={classnames(styles.aboveSmallDevice, activeTab === 'Applied Jobs' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:applied+jobs',
            className: `${styles.item} ${styles.subItem}`,
            href: '/my-activity/applied-jobs',
            children: [
              'Applied Jobs',
              <div key="iconSpacer" className={styles.iconSpacer} />
            ]
          })
        }
      </li>
      <li className={classnames(styles.smallDeviceOnly, activeTab === 'Recommended Jobs' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:recommended+jobs',
            className: `${styles.item} ${styles.subItem}`,
            href: '/recommended',
            children: [
              <span key="label">Recommended Jobs</span>,
              <ThumbsUpIcon
                key="icon"
                className={classnames(styles.icon, styles.recommendedJobs)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>
      {
        locale === 'NZ' ? null : (
          <li className={classnames(styles.smallDeviceOnly, activeTab === 'Company Reviews' && styles.activeTab)}>
            {
              linkRenderer({
                'data-analytics': 'header:companies',
                className: `${styles.item} ${styles.subItem}`,
                href: '/companies/',
                children: [
                  'Company Reviews',
                  <div key="iconSpacer" className={styles.iconSpacer} />
                ]
              })
            }
          </li>
        )
      }
      <li className={classnames(styles.aboveSmallDevice, activeTab === 'Settings' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:settings',
            className: styles.item,
            href: '/settings/',
            children: [
              'Settings',
              <div key="iconSpacer" className={styles.iconSpacer} />
            ]
          })
        }
      </li>
      <li className={classnames(styles.smallDeviceOnly, styles.firstItemInGroup, activeTab === 'Employer Site' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:employer+site',
            className: styles.item,
            href: employerLinkForLocale(locale),
            children: [
              'Employer Site',
              <div key="iconSpacer" className={styles.iconSpacer} />
            ]
          })
        }
      </li>
      {
        authenticationStatus === UNAUTHENTICATED ? (
          <li className={`${styles.smallDeviceOnly}`}>
            <span className={styles.item}>
              {
                linkRenderer({
                  'data-analytics': 'sign-in',
                  href: appendReturnUrl('/sign-in', returnUrl),
                  className: styles.itemLink,
                  title: 'Sign in',
                  children: 'Sign in'
                })
              }
              <span className={styles.secondaryItemText}>&nbsp;or&nbsp;</span>
              {
                linkRenderer({
                  'data-analytics': 'register',
                  href: appendReturnUrl('/sign-up', returnUrl),
                  className: styles.itemLink,
                  title: 'Register',
                  children: 'Register'
                })
              }
              <div className={styles.iconSpacer} />
            </span>
          </li>
        ) : null
      }
      {
        authenticationStatus === AUTHENTICATED ? (
          <li>
            {
              linkRenderer({
                'data-analytics': 'sign-out',
                className: styles.item,
                onClick: clearLocalStorage,
                href: appendReturnUrl('/login/LogoutWithReturnUrl', returnUrl),
                children: [
                  'Sign Out',
                  <div key="iconSpacer" className={styles.iconSpacer} />
                ]
              })
            }
          </li>
        ) : null
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
  linkRenderer: PropTypes.func.isRequired,
  returnUrl: PropTypes.string,
  activeTab: PropTypes.string
};
