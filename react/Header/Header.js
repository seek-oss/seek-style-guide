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
  linkRenderer,
  activeTab,
  divider,
  isHomepage,
  returnUrl
}) {
  const userClasses = classnames({
    [styles.user]: true,
    [styles.user_isReady]: authenticationStatus === UNAUTHENTICATED ||
      (authenticationStatus === AUTHENTICATED && userName)
  });
  const showHomepageSubNav = isHomepage &&
    ['Job Search', 'Company Reviews'].indexOf(activeTab) > -1 &&
    locale === 'AU';

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
              {
                authenticationStatus === AUTHENTICATED ?
                  <UserAccount userName={userName} linkRenderer={linkRenderer} /> :
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
          </div>
        </div>
        <div
          className={classnames({
            [styles.navigation]: true,
            [styles.navigation_isHomepage]: showHomepageSubNav
          })}>
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
  linkRenderer: PropTypes.func,
  activeTab: PropTypes.string,
  divider: PropTypes.bool,
  isHomepage: PropTypes.bool,
  returnUrl: PropTypes.string
};

Header.defaultProps = {
  locale: 'AU',
  linkRenderer: defaultLinkRenderer,
  authenticationStatus: AUTH_PENDING,
  activeTab: null,
  divider: true,
  isHomepage: false
};
