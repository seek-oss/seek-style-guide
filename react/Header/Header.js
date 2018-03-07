import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text } from 'seek-asia-style-guide/react';
import Menu from './components/Menu/Menu';
import ActionTray from './components/ActionTray/ActionTray';
import { sortCurrentLocaleToTop } from './localeUtils';
import styles from './Header.less';

export const ACTIVE_TAB_HOME = 'HOME';
export const ACTIVE_TAB_SEARCH = 'SEARCH';
export const ACTIVE_TAB_SAVED_JOBS = 'SAVED_JOBS';

const currentLocale = ({ title, ItemIcon }) => {
  return (
    <span className={styles.currentLocale}>
      <ItemIcon className={styles.localeIcon} />
      <Text whispering>{title}</Text>
    </span>
  );
};

currentLocale.propTypes = {
  title: PropTypes.string,
  ItemIcon: PropTypes.func
};

const renderPrimaryNavLinks = ({ links, brandStyles }) => {
  const primaryNavLinks = (links && links.map) ?
    links.map((link, index) => {
      return (
        <span key={index} className={styles.primaryNavLinkWrapper}>
          <a href={link.url} className={classnames(styles.primaryNavLink, brandStyles.primaryNavLink)}>
            <Text>{link.title}</Text>
          </a>
        </span>
      );
    }) : [];

  return (
    <div className={styles.primaryNavLinksWrapper}>
      { primaryNavLinks }
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
    const { loginAvailable = false, LogoComponent, logoProps, activeTab, links, more, locales, messages, brandStyles, country, language, actionTrayProps } = this.props;
    const localeList = sortCurrentLocaleToTop({ locales, country, language });
    const menuOpen = this.state.menuOpen;

    return (
      <header className={styles.root}>
        <div className={styles.externalNav}>
          <div className={styles.locale}>
            {currentLocale(localeList[0])}
          </div>
          <div>
            <Text whispering>{messages['header.employerLinkPrefix']}<a className={styles.employerLink} href={messages['header.employerSiteUrl']}>{messages['header.employerSiteTitle']}</a></Text>
          </div>
        </div>
        <div className={loginAvailable ? styles.primaryNav : styles.primaryNavNoLogin}>
          <LogoComponent {...logoProps} />
          { renderPrimaryNavLinks({ links, brandStyles }) }
        </div>
        <ActionTray {...actionTrayProps} brandStyles={brandStyles} messages={messages} menuOpen={menuOpen} handleToggleMenu={this.handleToggleMenu.bind(this)} loginAvailable={loginAvailable} activeTab={activeTab} />
        <Menu shouldShowMenu={menuOpen} messages={messages} links={links} more={more} locales={localeList} brandStyles={brandStyles} />
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
  actionTrayProps: PropTypes.object
};
