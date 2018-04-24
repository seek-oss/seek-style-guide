import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text } from 'seek-asia-style-guide/react';
import Menu from './components/Menu/Menu';
import ActionTray from './components/ActionTray/ActionTray';
import DropdownLink from './components/DropdownLink/DropdownLink'
import { sortCurrentLocaleToTop } from './localeUtils';
import styles from './Header.less';
import UserAccount from './components/UserAccount/UserAccount';

const currentLocale = ({ title, ItemIcon }) => {
  return (
    <span className={styles.currentLocale}>
      <ItemIcon className={styles.localeIcon} />
      <Text whispering>{title}</Text>
    </span>
  );
};

const defaultLinkRenderer = props => (<a {...props} />);

currentLocale.propTypes = {
  title: PropTypes.string,
  ItemIcon: PropTypes.func
};

const renderPrimaryNavLinks = ({ brandStyles }, links, _style) => {

  const primaryNavLinks = (links && links.map) ?
    links.map((link, index) => {
      return (
        <span key={index} className={styles.primaryNavLinkWrapper}>
          <a href={link.url} className={classnames(styles.primaryNavLink, brandStyles.primaryNavLink)}>
            <Text> {link.title}</Text>
            {link.showIcon && (<link.ItemIcon className={styles.icon} />)}
          </a>
        </span>
      );
    }) : [];

  return (
    <div className={_style}>
      {primaryNavLinks}
    </div>
  );
};

renderPrimaryNavLinks.propTypes = {
  links: PropTypes.array,
  brandStyles: PropTypes.object.isRequired
};

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    };
  }

  handleToggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const {
      LogoComponent,
      logoProps,
      activeTab,
      links,
      more,
      locales,
      messages,
      brandStyles,
      country,
      language,
      actionTrayProps,
      employerSite,
      loginAvailable = false,
      selectCountry = true,
      authenticationStatus,
      userName,
      menuItems

    } = this.props;

    const localeList = sortCurrentLocaleToTop({ locales, country, language });
    const menuOpen = this.state.menuOpen;

    return (
      <header className={styles.root}>
        <div className={styles.externalNav}>
          {
            // *** Country Selector ***
            selectCountry &&
            (
              <DropdownLink links={localeList} checked={0} />
            ) ||
            (
              <div className={styles.locale}>
                {currentLocale(localeList[0])}
              </div>
            )
          }
          {
            // *** Employer div ***
            employerSite &&
            (
              <div>
                <Text whispering>
                  {messages['header.employerLinkPrefix']}
                  <a className={styles.employerLink} href={messages['header.employerSiteUrl']}>
                    {messages['header.employerSiteTitle']}
                  </a>
                </Text>
              </div>
            )
          }
        </div>
        <div className={loginAvailable ? styles.primaryNav : styles.primaryNavNoLogin}>
          <LogoComponent {...logoProps} />
          {renderPrimaryNavLinks({ brandStyles }, links, styles.primaryNavLinksWrapper)}
          <div className={styles.secondaryNav} />
          <UserAccount
            language={language}
            userName={userName}
            loginAvailable={loginAvailable}
            authenticationStatus={authenticationStatus}
            brandStyles={brandStyles}
            loginTitle={messages['header.loginTitle']}
            loginUrl={messages['header.loginUrl']}
            signupTitle={messages['header.signupTitle']}
            signupUrl={messages['header.signupUrl']}
            menuItems={menuItems}
          />
        </div>
        <ActionTray
          {...actionTrayProps}
          brandStyles={brandStyles}
          messages={messages}
          menuOpen={menuOpen}
          handleToggleMenu={this.handleToggleMenu.bind(this)}
          loginAvailable={loginAvailable}
          activeTab={activeTab}
        />
        <Menu
          shouldShowMenu={menuOpen}
          messages={messages}
          links={links}
          more={more}
          locales={localeList}
          brandStyles={brandStyles}
          loginAvailable={loginAvailable}
          employerSite={employerSite}
        />
      </header>
    );
  }
}

Header.propTypes = {
  loginAvailable: PropTypes.bool,
  LogoComponent: PropTypes.func.isRequired,
  logoProps: PropTypes.object,
  activeTab: PropTypes.string,
  links: PropTypes.array,
  more: PropTypes.array,
  locales: PropTypes.array.isRequired,
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  brandStyles: PropTypes.object.isRequired,
  actionTrayProps: PropTypes.object,
  employerSite: PropTypes.bool,
  linkRenderer: PropTypes.func,
  selectCountry: PropTypes.bool,
  authenticationStatus: PropTypes.string,
  userName: PropTypes.string,
  menuItems: PropTypes.array
};

Header.defaultProps = {
  linkRenderer: defaultLinkRenderer
};
