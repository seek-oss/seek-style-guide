import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text } from 'seek-asia-style-guide/react';
import Menu from './components/Menu/Menu';
import ActionTray from './components/ActionTray/ActionTray';
import DropdownLink from './components/DropdownLink/DropdownLink';
import { sortCurrentLocaleToTop } from './localeUtils';
import styles from './Header.less';
import UserAccount from './components/UserAccount/UserAccount';
import { Link } from 'react-router-dom';

const isStandalone = process.env.IS_STANDALONE === 'true';

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
      const content = () => {
        return (
          <Text> {link.title}</Text>
        );
      };

      return (
        <span key={index} className={styles.primaryNavLinkWrapper}>
          {isStandalone ? (
            <a href={link.url} className={classnames(styles.primaryNavLink, brandStyles.primaryNavLink)}>
              {content()}
            </a>
          ) : (
            <Link to={link.url} className={classnames(styles.primaryNavLink, brandStyles.primaryNavLink)}>
              {content()}
            </Link>
          )}
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
      userAccMenuItems
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
                  {isStandalone ? (
                    <a className={styles.employerLink} href={messages['header.employerSiteUrl']}>
                      {messages['header.employerSiteTitle']}
                    </a>
                  ) : (
                    <Link className={styles.employerLink} to={messages['header.employerSiteUrl']}>
                      {messages['header.employerSiteTitle']}
                    </Link>
                  )}
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
            userName={userName}
            loginAvailable={loginAvailable}
            authenticationStatus={authenticationStatus}
            brandStyles={brandStyles}
            loginTitle={messages['header.loginTitle']}
            loginUrl={messages['header.loginUrl']}
            signupTitle={messages['header.signupTitle']}
            signupUrl={messages['header.signupUrl']}
            userAccMenuItems={userAccMenuItems}
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
          userAccMenuItems={userAccMenuItems}
          authenticationStatus={authenticationStatus}
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
  userAccMenuItems: PropTypes.array
};

Header.defaultProps = {
  linkRenderer: defaultLinkRenderer
};
