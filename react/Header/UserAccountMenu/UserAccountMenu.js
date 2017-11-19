import styles from './UserAccountMenu.less';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SearchIcon from '../../SearchIcon/SearchIcon';
import ProfileIcon from '../../ProfileIcon/ProfileIcon';
import HeartIcon from '../../HeartIcon/HeartIcon';
import StarIcon from '../../StarIcon/StarIcon';
import ThumbsUpIcon from '../../ThumbsUpIcon/ThumbsUpIcon';
import Hidden from '../../Hidden/Hidden';
import Loader from '../../Loader/Loader';
import employerLinkForLocale from '../employerLinkForLocale';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../../private/authStatusTypes';
import appendReturnUrl from '../../private/appendReturnUrl';
import urlForAuthStatus from '../../private/urlForAuthStatus';

const clearLocalStorage = () => {
  if (window && window.localStorage) {
    localStorage.clear();
  }
};

export default function UserAccountMenu({ locale, authenticationStatus, linkRenderer, returnUrl, activeTab }) {
  return (
    <ul className={styles.root}>
      <Hidden desktop component="li" className={classnames(activeTab === 'Job Search' && styles.activeTab)}>
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
      </Hidden>

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

      <Hidden mobile component="li" className={classnames(activeTab === 'Saved Searches' && styles.activeTab)}>
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
      </Hidden>

      <li className={classnames(activeTab === 'Saved & Applied Jobs' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:saved+jobs',
            className: `${styles.item} ${styles.subItem}`,
            href: urlForAuthStatus(authenticationStatus, '/my-activity/saved-jobs'),
            children: [
              <span key="label">Saved <Hidden desktop>& Applied </Hidden>Jobs</span>,
              <StarIcon
                key="icon"
                className={classnames(styles.icon, styles.saveJobs)}
                svgClassName={styles.iconSvg}
              />
            ]
          })
        }
      </li>

      <Hidden mobile component="li" className={classnames(activeTab === 'Applied Jobs' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:applied+jobs',
            className: `${styles.item} ${styles.subItem}`,
            href: urlForAuthStatus(authenticationStatus, '/my-activity/applied-jobs'),
            children: [
              'Applied Jobs',
              <div key="iconSpacer" className={styles.iconSpacer} />
            ]
          })
        }
      </Hidden>

      <Hidden desktop component="li" className={classnames(activeTab === 'Recommended Jobs' && styles.activeTab)}>
        {
          linkRenderer({
            'data-analytics': 'header:recommended+jobs',
            className: `${styles.item} ${styles.subItem}`,
            href: urlForAuthStatus(authenticationStatus, '/recommended'),
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
      </Hidden>

      {
        locale === 'NZ' ? null : (
          <Hidden desktop component="li" className={classnames(activeTab === 'Company Reviews' && styles.activeTab)}>
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
          </Hidden>
        )
      }

      <Hidden mobile component="li" className={classnames(activeTab === 'Settings' && styles.activeTab)}>
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
      </Hidden>

      <Hidden desktop component="li" className={styles.firstItemInGroup}>
        {(() => {
          switch (authenticationStatus) {
            case UNAUTHENTICATED: return (
              <span className={styles.item}>
                {
                  linkRenderer({
                    'data-analytics': 'header:sign-in',
                    href: appendReturnUrl('/sign-in', returnUrl),
                    className: styles.itemLink,
                    title: 'Sign in',
                    children: 'Sign in'
                  })
                }
                <span className={styles.secondaryItemText}>&nbsp;or&nbsp;</span>
                {
                  linkRenderer({
                    'data-analytics': 'header:register',
                    href: appendReturnUrl('/sign-up', returnUrl),
                    className: styles.itemLink,
                    title: 'Register',
                    children: 'Register'
                  })
                }
                <div className={styles.iconSpacer} />
              </span>
            );
            case AUTHENTICATED: return linkRenderer({
              'data-analytics': 'header:sign-out',
              className: styles.item,
              onClick: clearLocalStorage,
              href: returnUrl ? appendReturnUrl('/login/LogoutWithReturnUrl', returnUrl) : '/Login/Logout',
              children: [
                'Sign Out',
                <div key="iconSpacer" className={styles.iconSpacer} />
              ]
            });
            default: return (
              <span className={classnames(styles.item, styles.pendingAuth)}>
                <Loader _small />
                <div key="iconSpacer" className={styles.iconSpacer} />
              </span>
            );
          }
        })()}
      </Hidden>

      <Hidden desktop component="li" className={styles.firstItemInGroup}>
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
      </Hidden>

      {
        authenticationStatus === AUTHENTICATED ? (
          <Hidden mobile component="li">
            {
              linkRenderer({
                'data-analytics': 'header:sign-out',
                className: styles.item,
                onClick: clearLocalStorage,
                href: returnUrl ? appendReturnUrl('/login/LogoutWithReturnUrl', returnUrl) : '/Login/Logout',
                children: [
                  'Sign Out',
                  <div key="iconSpacer" className={styles.iconSpacer} />
                ]
              })
            }
          </Hidden>
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
