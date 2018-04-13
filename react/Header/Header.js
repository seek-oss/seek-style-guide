import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text, Button, ButtonGroup } from 'seek-asia-style-guide/react';
import Menu from './components/Menu/Menu';
import ActionTray from './components/ActionTray/ActionTray';
import DropdownLink from './components/DropdownLink/DropdownLink'
import { sortCurrentLocaleToTop } from './localeUtils';
import styles from './Header.less';

const renderSecondaryNavBtns = ({ btns }) => {
  if (btns && btns.map) {
    const secondaryNavBtns = btns.map((btn, index) => {
        return (
          <Button color={btn.btnColor || "hyperlink"}
                  compact
                  component="a"
                  href={btn.url}>
            {btn.title}
          </Button>
        );
    });

    return (
      <div className={styles.secondaryNav}>
        <ButtonGroup>
          { secondaryNavBtns }
        </ButtonGroup>
      </div>
    );
  }
  return null;
};

renderSecondaryNavBtns.propTypes = {
  btns: PropTypes.array
};

const renderPrimaryNavLinks = ({ brandStyles }, links, _style) => {

  const primaryNavLinks = (links && links.map) ?
    links.map((link, index) => {
      return (
        <span key={index} className={styles.primaryNavLinkWrapper}>
          <a href={link.url} className={classnames(styles.primaryNavLink, brandStyles.primaryNavLink)}>
            <Text>{link.title}</Text>
            {link.subTitle && <Text whisperingTitle>{link.subTitle}</Text>}
          </a>
        </span>
      );
    }) : [];

  return (
    <div className={_style}>
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
    const { LogoComponent, logoProps, activeTab, links, more, locales, messages, brandStyles, country, language, actionTrayProps, btns, rightLinks, employerSite, loginAvailable = false } = this.props;
    const localeList = sortCurrentLocaleToTop({ locales, country, language });
    const menuOpen = this.state.menuOpen;

    return (
      <header className={styles.root}>
        <div className={styles.externalNav}>
          <DropdownLink localeList={localeList} />
        {
          employerSite &&
          (<div>
            <Text whispering>{messages['header.employerLinkPrefix']}<a className={styles.employerLink} href={messages['header.employerSiteUrl']}>{messages['header.employerSiteTitle']}</a></Text>
          </div>)
        }
        </div>
        <div className={loginAvailable ? styles.primaryNav : styles.primaryNavNoLogin}>
          <LogoComponent {...logoProps} />
          { renderPrimaryNavLinks({ brandStyles }, links, styles.primaryNavLinksWrapper ) }
          { renderPrimaryNavLinks({ brandStyles }, rightLinks, styles.secondaryNav ) }
          { !rightLinks && renderSecondaryNavBtns({ btns }) }
        </div>
        <ActionTray {...actionTrayProps} brandStyles={brandStyles} messages={messages} menuOpen={menuOpen} handleToggleMenu={this.handleToggleMenu.bind(this)} loginAvailable={loginAvailable} activeTab={activeTab} />
        <Menu shouldShowMenu={menuOpen} messages={messages} links={links} more={more} locales={localeList} brandStyles={brandStyles} btns={btns} loginAvailable={loginAvailable} rightLinks={rightLinks} employerSite={employerSite} />
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
  btn: PropTypes.array,
  rightLinks: PropTypes.array,
  employerSite: PropTypes.bool
};
