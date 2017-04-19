import styles from './Header.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Logo from '../Logo/Logo';
import PartnerSites from './PartnerSites/PartnerSites';
import Locales from './Locales/Locales';
import Navigation from './Navigation/Navigation';
import SignInRegister from './SignInRegister/SignInRegister';
import UserAccount from './UserAccount/UserAccount';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import employerLinkForLocale from './employerLinkForLocale';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from './authStatusTypes';

const defaultLinkRenderer = props => (<a {...props} />);

export default function Header({
  locale,
  authenticationStatus,
  userName,
  userEmail,
  linkRenderer,
  activeTab,
  divider,
  returnUrl
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
      <section className={styles.content}>
        <div className={styles.banner}>
          <h1 data-automation="logo" className={styles.logo}>
            <Logo svgClassName={styles.logoSvg} />
            {
              linkRenderer({
                'data-analytics': 'header:jobs',
                className: styles.logoLink,
                href: '/',
                children: <ScreenReaderOnly>SEEK</ScreenReaderOnly>
              })
            }
          </h1>
          <div className={styles.userWrapper}>
            <div className={userClasses}>
              <div className={styles.userAccountWrapper}>
                <UserAccount
                  locale={locale}
                  authenticationStatus={authenticationStatus}
                  userName={displayName}
                  linkRenderer={linkRenderer}
                  returnUrl={returnUrl}
                  activeTab={activeTab}
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
          </div>
        </div>
        <div className={styles.navigation}>
          <Navigation
            locale={locale}
            linkRenderer={linkRenderer}
            activeTab={activeTab}
            divider={divider}
          />
        </div>
        <div className={styles.topBanner}>
          <div className={styles.topBannerContent}>
            <PartnerSites locale={locale} linkRenderer={linkRenderer} />
            <div className={styles.locale}>
              <Locales locale={locale} linkRenderer={linkRenderer} />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

Header.propTypes = {
  locale: PropTypes.oneOf(['AU', 'NZ']),
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
  returnUrl: PropTypes.string
};

Header.defaultProps = {
  locale: 'AU',
  linkRenderer: defaultLinkRenderer,
  authenticationStatus: AUTH_PENDING,
  activeTab: null,
  divider: true,
  userEmail: ''
};
