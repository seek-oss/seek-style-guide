import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChevronIcon from '../../ChevronIcon/ChevronIcon';
import Hidden from '../../Hidden/Hidden';
import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';
import UserAccountMenu from '../UserAccountMenu/UserAccountMenu';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_PENDING
} from '../../private/authStatusTypes';
import styles from './UserAccount.less';

const calculateMobileMenuLabel = (authenticationStatus, userName) => {
  if (authenticationStatus === AUTH_PENDING) {
    return '';
  }

  if (authenticationStatus === AUTHENTICATED) {
    return userName;
  }

  return 'Menu';
};

export default class UserAccount extends Component {
  static propTypes = {
    locale: PropTypes.oneOf(['AU', 'NZ']),
    authenticationStatus: PropTypes.oneOf([
      AUTHENTICATED,
      UNAUTHENTICATED,
      AUTH_PENDING
    ]),
    userName: PropTypes.string,
    linkRenderer: PropTypes.func.isRequired,
    returnUrl: PropTypes.string,
    activeTab: PropTypes.string,
    newBadgeTab: PropTypes.string,
    onMenuToggle: PropTypes.func
  };

  static defaultProps = {
    onMenuToggle: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  handleMenuToggle = () => {
    this.setState(state => {
      this.props.onMenuToggle({ open: !state.menuOpen });
      return { menuOpen: !state.menuOpen };
    });
  };

  handleMenuClick = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const {
      locale,
      authenticationStatus,
      userName,
      linkRenderer,
      returnUrl,
      activeTab,
      newBadgeTab
    } = this.props;

    const mobileMenuLabel = calculateMobileMenuLabel(
      authenticationStatus,
      userName
    );
    const desktopMenuLabel = userName;

    return (
      <nav
        aria-label="my account"
        role="navigation"
        data-automation="user-account"
        className={styles.root}
      >
        <input
          id="user-account-menu-toggle"
          autoComplete="off"
          className={styles.toggle}
          type="checkbox"
          checked={this.state.menuOpen}
          onChange={this.handleMenuToggle}
        />

        <div className={styles.menuBackdrop}>
          <label
            data-automation="user-account-menu-backdrop"
            htmlFor="user-account-menu-toggle"
            className={styles.menuBackdropLabel}
          >
            <ScreenReaderOnly>Show user menu</ScreenReaderOnly>
          </label>
        </div>

        <label
          data-automation="user-account-menu-toggle"
          className={styles.toggleLabel}
          htmlFor="user-account-menu-toggle"
        >
          <ScreenReaderOnly>Show user menu</ScreenReaderOnly>
          <span data-hj-masked={true}>
            <Hidden desktop className={styles.menuLabel}>
              {mobileMenuLabel}
            </Hidden>
            <Hidden
              mobile
              className={styles.menuLabel}
              data-automation="user-account-name"
            >
              {desktopMenuLabel}
            </Hidden>
          </span>
          <ChevronIcon
            direction="down"
            className={styles.chevron}
            svgClassName={styles.chevronSvg}
          />
        </label>

        <div onClick={this.handleMenuClick} className={styles.toggleContainer}>
          <UserAccountMenu
            locale={locale}
            authenticationStatus={authenticationStatus}
            linkRenderer={linkRenderer}
            returnUrl={returnUrl}
            activeTab={activeTab}
            newBadgeTab={newBadgeTab}
          />
        </div>
      </nav>
    );
  }
}
