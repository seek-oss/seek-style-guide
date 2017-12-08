import styles from './Header.less';

import classnames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Locales from './Locales/Locales';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';
import PartnerSites from './PartnerSites/PartnerSites';
import Hidden from '../Hidden/Hidden';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import SignInRegister from './SignInRegister/SignInRegister';
import UserAccount from './UserAccount/UserAccount';
import employerLinkForLocale from './employerLinkForLocale';
import StructuredDataSchema from './StructuredDataSchema/StructuredDataSchema';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../private/authStatusTypes';

const defaultLinkRenderer = props => (<a {...props} />);

export default function Header({
  logoComponent: LogoComponent,
  locale,
  authenticationStatus,
  userName,
  userEmail,
  linkRenderer,
  activeTab,
  divider,
  returnUrl,
  onMenuToggle = () => {}
}) {
  const isAuthenticated = (authenticationStatus === AUTHENTICATED && (userName || userEmail));
  const isUnauthenticated = (authenticationStatus === UNAUTHENTICATED);

  const userClasses = classnames({
    [styles.user]: true,
    [styles.user_isAuthenticated]: isAuthenticated,
    [styles.user_isUnauthenticated]: isUnauthenticated,
    [styles.user_isReady]: isUnauthenticated || isAuthenticated
  });

  const displayName = userName || userEmail.split('@')[0];

  return (
    <header className={styles.root} role="banner" aria-label="Primary navigation">
      <StructuredDataSchema locale={locale} />
      <section className={styles.content}>
        <div className={styles.banner}>
          <h1 data-automation="logo" className={styles.logo}>
            <LogoComponent locale={locale} svgClassName={styles.logoSvg} />
            {
              linkRenderer({
                'data-analytics': 'header:jobs',
                className: styles.logoLink,
                href: '/',
                children: <ScreenReaderOnly>SEEK</ScreenReaderOnly>
              })
            }
          </h1>
          <Hidden screen className={styles.logoNote}>Australia’s #1 job site</Hidden>
          <Hidden print className={styles.userWrapper}>
            <div className={userClasses}>
              <div className={styles.userAccountWrapper}>
                <UserAccount
                  locale={locale}
                  authenticationStatus={authenticationStatus}
                  userName={displayName}
                  linkRenderer={linkRenderer}
                  returnUrl={returnUrl}
                  activeTab={activeTab}
                  onMenuToggle={onMenuToggle}
                />
              </div>
              <div className={styles.signInRegisterWrapper}>
                <SignInRegister linkRenderer={linkRenderer} returnUrl={returnUrl} />
              </div>
              <span className={styles.divider} />
            </div>
            <div className={styles.employerSite}>
              {
                linkRenderer({
                  'data-analytics': 'header:employer+site',
                  className: styles.employerLink,
                  href: employerLinkForLocale(locale),
                  children: 'Employer site'
                })
              }
            </div>
          </Hidden>
        </div>
        <Hidden print className={styles.navigation}>
          <Navigation
            locale={locale}
            linkRenderer={linkRenderer}
            activeTab={activeTab}
            divider={divider}
          />
        </Hidden>
        <Hidden print mobile className={styles.topBanner}>
          <div className={styles.topBannerContent}>
            <PartnerSites locale={locale} linkRenderer={linkRenderer} />
            <div className={styles.locale}>
              <Locales locale={locale} linkRenderer={linkRenderer} />
            </div>
          </div>
        </Hidden>
      </section>
    </header>
  );
}

Header.propTypes = {
  locale: PropTypes.oneOf(['AU', 'NZ']),
  logoComponent: PropTypes.oneOfType([
    PropTypes.instanceOf(Component),
    PropTypes.func
  ]),
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ]),
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  linkRenderer: PropTypes.func,
  activeTab: PropTypes.oneOf([
    'Job Search',
    '$150k+ Jobs',
    'Profile',
    'Saved & Applied Jobs',
    'Recommended Jobs',
    'Company Reviews',
    'Advice & Tips'
  ]),
  divider: PropTypes.bool,
  returnUrl: PropTypes.string,
  onMenuToggle: PropTypes.func
};

Header.defaultProps = {
  locale: 'AU',
  logoComponent: Logo,
  linkRenderer: defaultLinkRenderer,
  authenticationStatus: AUTH_PENDING,
  activeTab: null,
  divider: true,
  userEmail: ''
};
