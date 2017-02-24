import styles from './Header.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Logo from '../Logo/Logo';
import PartnerSites from './PartnerSites/PartnerSites';
import Locales from './Locales/Locales';
import Navigation from './Navigation/Navigation';
import SignInRegister from './SignInRegister/SignInRegister';
import UserAccount from './UserAccount/UserAccount';
import ScreenReaderOnly from '../Accessibility/ScreenReaderOnly';

const defaultLinkRenderer = props => (<a {...props} />);
const employerLinkHref = locale => locale === 'NZ' ?
  'https://talent.seek.co.nz/' :
  'https://talent.seek.com.au/';

export default function Header({
  locale,
  authenticated,
  userName,
  linkRenderer,
  activeTab,
  divider
}) {
  const userClasses = classnames({
    [styles.user]: true,
    [styles.user_isReady]: authenticated === true || authenticated === false
  });

  return (
    <header role="banner" aria-label="Primary navigation">
      <section className={styles.root}>
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
                authenticated ?
                  <UserAccount userName={userName} linkRenderer={linkRenderer} /> :
                  <SignInRegister linkRenderer={linkRenderer} />
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
  authenticated: PropTypes.bool,
  userName: PropTypes.string,
  linkRenderer: PropTypes.func,
  activeTab: PropTypes.string,
  divider: PropTypes.bool
};

Header.defaultProps = {
  locale: 'AU',
  linkRenderer: defaultLinkRenderer,
  authenticated: null,
  activeTab: null,
  divider: true
};
