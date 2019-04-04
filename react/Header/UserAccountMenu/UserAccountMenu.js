// @flow

import styles from './UserAccountMenu.less';

import React from 'react';
import classnames from 'classnames';

import BuildingIcon from '../../BuildingIcon/BuildingIcon';
import SearchIcon from '../../SearchIcon/SearchIcon';
import ProfileIcon from '../../ProfileIcon/ProfileIcon';
import HeartIcon from '../../HeartIcon/HeartIcon';
import StarIcon from '../../StarIcon/StarIcon';
import ThumbsUpIcon from '../../ThumbsUpIcon/ThumbsUpIcon';
import TickCircleIcon from '../../TickCircleIcon/TickCircleIcon';
import Hidden from '../../Hidden/Hidden';
import Loader from '../../Loader/Loader';
import Badge from '../../Badge/Badge';
import employerLinkForLocale from '../employerLinkForLocale';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_PENDING
} from '../../private/authStatusTypes';
import appendReturnUrl from '../../private/appendReturnUrl';
import urlForAuthStatus from '../../private/urlForAuthStatus';

const JOB_SEARCH = 'Job Search';
const PROFILE = 'Profile';
const SAVED_SEARCHES = 'Saved Searches';
const SAVED_AND_APPLIED = 'Saved & Applied Jobs';
const APPLIED_JOBS = 'Applied Jobs';
const RECOMMENDED_JOBS = 'Recommended Jobs';
const SETTINGS = 'Settings';
const CAREER_ADVICE = 'Career Advice';
const COMPANY_REVIEWS = 'Company Reviews';

type TabsType =
  | typeof JOB_SEARCH
  | typeof PROFILE
  | typeof SAVED_SEARCHES
  | typeof SAVED_AND_APPLIED
  | typeof APPLIED_JOBS
  | typeof RECOMMENDED_JOBS
  | typeof SETTINGS
  | typeof CAREER_ADVICE
  | typeof COMPANY_REVIEWS;

type Props = {
  locale?: 'AU' | 'NZ',
  authenticationStatus?: AUTHENTICATED | UNAUTHENTICATED | AUTH_PENDING,
  linkRenderer: Function,
  returnUrl?: string,
  activeTab?: TabsType,
  newBadgeTab?: TabsType
};

const clearLocalStorage = () => {
  if (window && window.localStorage) {
    localStorage.clear();
  }
};

const BadgeComponent = () => (
  <Hidden desktop key="new" className={styles.newBadge}>
    <Badge strong tone="info">
      New
    </Badge>
  </Hidden>
);

export default ({
  locale,
  authenticationStatus,
  linkRenderer,
  returnUrl,
  activeTab,
  newBadgeTab
}: Props) => (
  <ul className={styles.root}>
    <Hidden
      desktop
      component="li"
      className={classnames(activeTab === JOB_SEARCH && styles.activeTab)}
    >
      {linkRenderer({
        'data-analytics': 'header:jobs',
        className: styles.item,
        href: '/',
        children: [
          newBadgeTab === JOB_SEARCH && <BadgeComponent />,
          <span key="label">{JOB_SEARCH}</span>,
          <SearchIcon
            key="icon"
            className={classnames(styles.icon, styles.jobSearch)}
            svgClassName={styles.iconSvg}
          />
        ]
      })}
    </Hidden>
    <li className={classnames(activeTab === PROFILE && styles.activeTab)}>
      {linkRenderer({
        'data-analytics': 'header:profile',
        className: styles.item,
        href: '/profile/',
        children: [
          newBadgeTab === PROFILE && <BadgeComponent />,
          <span key="label">{PROFILE}</span>,
          <ProfileIcon
            key="icon"
            className={classnames(styles.icon, styles.profile)}
            svgClassName={styles.iconSvg}
          />
        ]
      })}
    </li>
    <li
      className={classnames(activeTab === SAVED_SEARCHES && styles.activeTab)}
    >
      {linkRenderer({
        'data-analytics': 'header:saved+searches',
        className: styles.item,
        href: '/my-activity/saved-searches',
        children: [
          <span key="label">{SAVED_SEARCHES}</span>,
          <HeartIcon
            key="icon"
            className={classnames(styles.icon, styles.saveSearches)}
            svgClassName={styles.iconSvg}
          />
        ]
      })}
    </li>
    <li
      className={classnames(
        activeTab === SAVED_AND_APPLIED && styles.activeTab
      )}
    >
      {linkRenderer({
        'data-analytics': 'header:saved+jobs',
        className: styles.item,
        href: urlForAuthStatus(authenticationStatus, '/my-activity/saved-jobs'),
        children: [
          newBadgeTab === SAVED_AND_APPLIED && <BadgeComponent />,
          <span key="label">
            Saved <Hidden desktop>& Applied </Hidden>Jobs
          </span>,
          <StarIcon
            key="icon"
            className={classnames(styles.icon, styles.saveJobs)}
            svgClassName={styles.iconSvg}
          />
        ]
      })}
    </li>
    <Hidden
      mobile
      component="li"
      className={classnames(activeTab === APPLIED_JOBS && styles.activeTab)}
    >
      {linkRenderer({
        'data-analytics': 'header:applied+jobs',
        className: styles.item,
        href: urlForAuthStatus(
          authenticationStatus,
          '/my-activity/applied-jobs'
        ),
        children: [
          newBadgeTab === APPLIED_JOBS && <BadgeComponent />,
          <span key="label">{APPLIED_JOBS}</span>,
          <TickCircleIcon
            key="icon"
            className={classnames(styles.icon, styles.appliedJobs)}
            svgClassName={styles.iconSvg}
          />
        ]
      })}
    </Hidden>
    <li
      className={classnames(activeTab === RECOMMENDED_JOBS && styles.activeTab)}
    >
      {linkRenderer({
        'data-analytics': 'header:recommended+jobs',
        className: styles.item,
        href: urlForAuthStatus(authenticationStatus, '/recommended'),
        children: [
          newBadgeTab === RECOMMENDED_JOBS && <BadgeComponent />,
          <span key="label">{RECOMMENDED_JOBS}</span>,
          <ThumbsUpIcon
            key="icon"
            className={classnames(styles.icon, styles.recommendedJobs)}
            svgClassName={styles.iconSvg}
          />
        ]
      })}
    </li>
    <Hidden mobile component="hr" className={styles.menuSeparator} />
    {locale === 'NZ' ? null : (
      <Hidden
        desktop
        component="li"
        className={classnames(
          activeTab === COMPANY_REVIEWS && styles.activeTab
        )}
      >
        {linkRenderer({
          'data-analytics': 'header:companies',
          className: styles.item,
          href: '/companies/',
          children: [
            newBadgeTab === COMPANY_REVIEWS && <BadgeComponent />,
            COMPANY_REVIEWS,
            <BuildingIcon
              key="icon"
              className={styles.icon}
              svgClassName={styles.crSvg}
            />
          ]
        })}
      </Hidden>
    )}
    <Hidden
      mobile
      component="li"
      className={classnames(activeTab === SETTINGS && styles.activeTab)}
    >
      {linkRenderer({
        'data-analytics': 'header:settings',
        className: styles.item,
        href: '/settings/',
        children: SETTINGS
      })}
    </Hidden>
    <Hidden desktop component="li" className={styles.firstItemInGroup}>
      {(() => {
        switch (authenticationStatus) {
          case UNAUTHENTICATED:
            return (
              <span className={styles.item}>
                {linkRenderer({
                  'data-analytics': 'header:sign-in',
                  href: appendReturnUrl('/sign-in', returnUrl),
                  className: styles.itemLink,
                  title: 'Sign in',
                  children: 'Sign in'
                })}
                <span className={styles.secondaryItemText}>&nbsp;or&nbsp;</span>
                {linkRenderer({
                  'data-analytics': 'header:register',
                  href: appendReturnUrl('/sign-up', returnUrl),
                  className: styles.itemLink,
                  title: 'Register',
                  children: 'Register'
                })}
                <div className={styles.iconSpacer} />
              </span>
            );
          case AUTHENTICATED:
            return linkRenderer({
              'data-analytics': 'header:sign-out',
              className: styles.item,
              onClick: clearLocalStorage,
              href: returnUrl
                ? appendReturnUrl('/login/LogoutWithReturnUrl', returnUrl)
                : '/Login/Logout',
              children: [
                'Sign Out',
                <Hidden
                  desktop
                  key="iconSpacer"
                  className={styles.iconSpacer}
                />
              ]
            });
          default:
            return (
              <span className={classnames(styles.item, styles.pendingAuth)}>
                <Loader inline xsmall />
                <Hidden
                  desktop
                  key="iconSpacer"
                  className={styles.iconSpacer}
                />
              </span>
            );
        }
      })()}
    </Hidden>
    {locale === 'NZ' ? null : (
      <Hidden
        desktop
        component="li"
        className={classnames(
          activeTab === CAREER_ADVICE && styles.activeTab,
          styles.firstItemInGroup
        )}
      >
        {linkRenderer({
          'data-analytics': 'header:advice',
          className: styles.item,
          href: '/career-advice/',
          children: [
            newBadgeTab === CAREER_ADVICE && <BadgeComponent />,
            CAREER_ADVICE,
            <div key="iconSpacer" className={styles.iconSpacer} />
          ]
        })}
      </Hidden>
    )}
    <Hidden
      desktop
      component="li"
      className={classnames(locale === 'NZ' && styles.firstItemInGroup)}
    >
      {linkRenderer({
        'data-analytics': 'header:employer+site',
        className: styles.item,
        href: employerLinkForLocale(locale),
        children: [
          'Employer Site',
          <div key="iconSpacer" className={styles.iconSpacer} />
        ]
      })}
    </Hidden>
    <Hidden desktop component="li">
      {linkRenderer({
        'data-analytics': 'header:courses',
        className: styles.item,
        href: 'https://www.seek.com.au/learning/',
        children: [
          'Courses',
          <div key="iconSpacer" className={styles.iconSpacer} />
        ]
      })}
    </Hidden>
    {authenticationStatus === AUTHENTICATED ? (
      <Hidden mobile component="li">
        {linkRenderer({
          'data-analytics': 'header:sign-out',
          className: styles.item,
          onClick: clearLocalStorage,
          href: returnUrl
            ? appendReturnUrl('/login/LogoutWithReturnUrl', returnUrl)
            : '/Login/Logout',
          children: 'Sign Out'
        })}
      </Hidden>
    ) : null}
  </ul>
);
