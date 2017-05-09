import styles from './Header.less';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Locales from './Locales/Locales';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';
import PartnerSites from './PartnerSites/PartnerSites';
import PrintVisibilityWrapper from '../PrintVisibilityWrapper/PrintVisibilityWrapper';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import SignInRegister from './SignInRegister/SignInRegister';
import UserAccount from './UserAccount/UserAccount';

const defaultLinkRenderer = props => (<a {...props} />);
const employerLinkHref = locale => locale === 'NZ' ?
  'https://talent.seek.co.nz/' :
  'https://talent.seek.com.au/';

const AUTHENTICATED = 'authenticated';
const UNAUTHENTICATED = 'unauthenticated';
const AUTH_PENDING = 'pending';

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
  const userClasses = classnames({
    [styles.user]: true,
    [styles.user_isReady]: authenticationStatus === UNAUTHENTICATED ||
      (authenticationStatus === AUTHENTICATED && (userName || userEmail))
  });

  const displayName = userName || userEmail.split('@')[0];

  return (
    <header className={styles.root} role="banner" aria-label="Primary navigation">
      <section className={styles.content}>
        <div className={styles.banner}>
          <h1 data-automation="logo">
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
          <PrintVisibilityWrapper isPrintOnly className={styles.logoNote}>Australia’s #1 job site</PrintVisibilityWrapper>
          <PrintVisibilityWrapper isScreenOnly className={styles.userWrapper}>
            <div className={userClasses}>
              {
                authenticationStatus === AUTHENTICATED ?
                  <UserAccount userName={displayName} linkRenderer={linkRenderer} /> :
                  <SignInRegister linkRenderer={linkRenderer} returnUrl={returnUrl} />
              }
              <span className={styles.divider} />
            </div>
            <div className={styles.employerSite}>
              {
                linkRenderer({
                  'data-analytics': 'header:employer+site',
                  className: styles.employerLink,
                  href: employerLinkHref(locale),
                  children: 'Employer site'
                })
              }
            </div>
          </PrintVisibilityWrapper>
        </div>
        <PrintVisibilityWrapper isScreenOnly className={styles.navigation}>
          <Navigation
            locale={locale}
            linkRenderer={linkRenderer}
            activeTab={activeTab}
            divider={divider}
          />
        </PrintVisibilityWrapper>
        <PrintVisibilityWrapper isScreenOnly className={styles.topBanner}>
          <div className={styles.topBannerContent}>
            <PartnerSites locale={locale} linkRenderer={linkRenderer} />
            <div className={styles.locale}>
              <Locales locale={locale} linkRenderer={linkRenderer} />
            </div>
          </div>
        </PrintVisibilityWrapper>
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
  activeTab: PropTypes.string,
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
