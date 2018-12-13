import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BellIcon from '../../BellIcon/BellIcon';
import CrossIcon from '../../CrossIcon/CrossIcon';
import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';
import styles from './NotificationBell.less';

export default class NotificationBell extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  handleMenuToggle = () => {
    this.setState(state => {
      return { menuOpen: !state.menuOpen };
    });
  };

  handleMenuClick = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { children } = this.props;

    return children ? (
      <nav
        aria-label="my account"
        role="navigation"
        data-automation="notification"
        className={styles.root}>

        <input
          id="notification-menu-toggle"
          autoComplete="off"
          className={styles.toggle}
          type="checkbox"
          checked={this.state.menuOpen}
          onChange={this.handleMenuToggle}
        />

        <label
          data-automation="notification-menu-toggle"
          className={styles.toggleLabel}
          htmlFor="notification-menu-toggle">
          <ScreenReaderOnly>Show user menu</ScreenReaderOnly>
          <BellIcon className={styles.bell} svgClassName={styles.bellSvg} />
        </label>
        <div className={styles.menuBackdrop}>
          <label
            data-automation="notification-menu-backdrop"
            htmlFor="notification-menu-toggle"
            className={styles.menuBackdropLabel}>
            <ScreenReaderOnly>Show user menu</ScreenReaderOnly>
          </label>
        </div>

        <div onClick={this.handleMenuClick} className={styles.toggleContainer}>
          <div className={styles.notification}>
            <CrossIcon className={styles.cross} />
            {children}
          </div>
        </div>
      </nav>
    ) : null;
  }
}
