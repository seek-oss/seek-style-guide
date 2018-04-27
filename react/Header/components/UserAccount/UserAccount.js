import React, { Component } from 'react';
import { Text, Button, ButtonGroup, ChevronIcon } from 'seek-asia-style-guide/react';
import PropTypes from 'prop-types';
import { AUTHENTICATED, UNAUTHENTICATED } from '../../../private/authStatusTypes';
import styles from '../../Header.less';
import classnames from 'classnames';
import UserAccountMenu from '../UserAccountMenu/UserAccountMenu';
import { Link } from 'react-router-dom';

const isStandalone = process.env.IS_STANDALONE === 'true';

export default class UserAccount extends Component {
  static defaultProps = {
    onMenuToggle: () => { }
  }

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  handleMenuToggleClick = () => {
    this.setState(state => {
      this.props.onMenuToggle({ open: !state.menuOpen });
      return { menuOpen: !state.menuOpen };
    });
  };

  render() {
    const {
      loginAvailable,
      authenticationStatus,
      userName,
      brandStyles,
      loginTitle,
      loginUrl,
      signupTitle,
      signupUrl,
      userAccMenuItems
    } = this.props;

    if (loginAvailable) {
      switch (authenticationStatus) {
        case AUTHENTICATED:
          return (
            <div >
              <span className={styles.secondaryNav}>
                <div onClick={this.handleMenuToggleClick}>
                  <span className={styles.primaryNavLinkWrapper}>
                    <a className={classnames(styles.primaryNavLink, brandStyles.primaryNavLink)}>
                      <Text>{userName}</Text>
                      <div className={styles.icon}>
                        <ChevronIcon svgClassName={styles.chevronSvg} direction="down" />
                      </div>
                    </a>
                  </span>
                </div>
              </span>
              <span>
                {this.state.menuOpen && <UserAccountMenu userAccMenuItems={userAccMenuItems} />}
              </span>
            </div>
          );

        case UNAUTHENTICATED:
          return (
            <div className={styles.secondaryNav}>
              <ButtonGroup>
                <Button
                  color='secondary'
                  compact>
                  { isStandalone ? (
                    <a href={loginUrl}>{loginTitle}</a>
                  ) : (
                    <Link to={loginUrl}>{loginTitle}</Link>
                  ) }
                </Button>
                <Button
                  color='callToAction'
                  compact>
                  { isStandalone ? (
                    <a href={signupUrl}>{signupTitle}</a>
                  ) : (
                    <Link to={signupUrl}>{signupTitle}</Link>
                  ) }
                </Button>
              </ButtonGroup>
            </div>
          );
        default:
          return null;
      }
    }
    return null;
  }
}

UserAccount.propTypes = {
  loginAvailable: PropTypes.bool.isRequired,
  authenticationStatus: PropTypes.string.isRequired,
  userName: PropTypes.string,
  brandStyles: PropTypes.object,
  loginTitle: PropTypes.string,
  loginUrl: PropTypes.string,
  signupTitle: PropTypes.string,
  signupUrl: PropTypes.string,
  userAccMenuItems: PropTypes.array,
  onMenuToggle: PropTypes.func
};
