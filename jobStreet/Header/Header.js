import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import {
  Text,
  PageBlock,
  Section,
  HamburgerIcon,
  Button
} from 'seek-asia-style-guide/react';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_PENDING
} from 'seek-asia-style-guide/react/private/authStatusTypes';
import Nav from './components/Nav/Nav';
import styles from './header.less';
import links from './links';
import localization from '../localization';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavActive: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.handleNodeRef = this.handleNodeRef.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick(e) {
    const userClickedOutsideOfDropdown = !this.dropdownNode.contains(e.target);
    if (userClickedOutsideOfDropdown) {
      this.showNav(false);
    }
  }

  handleHamburgerClick() {
    if (!this.state.isNavActive) {
      this.showNav(true);
    }
  }

  handleNodeRef(node) {
    this.dropdownNode = node;
  }

  showNav(shouldShowNav) {
    const eventAction = shouldShowNav ?
      'addEventListener' :
      'removeEventListener';
    document[eventAction]('click', this.handleClick, false);
    this.setState({
      isNavActive: shouldShowNav
    });
  }

  render() {
    const {
      username,
      userToken,
      language,
      country,
      authenticationStatus,
      activeNavLinkTextKey
    } = this.props;
    const { isNavActive } = this.state;
    let userLinks = [];
    if (authenticationStatus === AUTHENTICATED) {
      userLinks = links.getUserLinks(username, userToken);
    } else if (authenticationStatus === UNAUTHENTICATED) {
      userLinks = links.getLoggedOutUserLinks();
    }
    const navLinks = links.getNavLinks(username, userToken);
    const messages = localization[`${language}-${country}`];

    return (
      <header
        className={styles.root}
        role="banner"
        aria-label="Primary navigation">
        {/*
          * PageBlock / Section being a functional component doesn't work with `ref`.
          * https://reactjs.org/docs/refs-and-the-dom.html
         */}
        <PageBlock
          className={classNames({
            [styles.navWrapper]: true,
            [styles.navWrapperHideOnMobile]: !isNavActive
          })}>
          <div className={styles.navContainer} ref={this.handleNodeRef}>
            <Nav
              key={'navLinks'}
              links={navLinks}
              messages={messages}
              activeNavLinkTextKey={activeNavLinkTextKey}
            />
            {authenticationStatus === AUTH_PENDING || (
              <Nav key={'userLinks'} links={userLinks} messages={messages} />
            )}
          </div>
        </PageBlock>
        <PageBlock className={styles.bannerWrapper}>
          <Section className={styles.bannerContainer}>
            <Button
              className={styles.toggle}
              onClick={this.handleHamburgerClick}>
              <HamburgerIcon />
            </Button>
            <div className={styles.logoContainer}>
              <a href="/" title={messages['header.homeTitle']}>
                <Logo className={styles.logo} />
              </a>
            </div>
            <a
              className={styles.employerLink}
              href={messages['header.employerLink']}
              title={messages['header.employerTitle']}>
              <Text strong>{messages['header.employerText']}</Text>
            </a>
          </Section>
        </PageBlock>
      </header>
    );
  }
}

Header.propTypes = {
  username: PropTypes.string,
  userToken: PropTypes.string,
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ]).isRequired,
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  activeNavLinkTextKey: PropTypes.string
};

export default Header;
