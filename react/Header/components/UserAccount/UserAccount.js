import React, { Component } from 'react';
import { Text, Button, ButtonGroup, ChevronIcon } from 'seek-asia-style-guide/react';
import PropTypes from 'prop-types';
import { AUTHENTICATED, UNAUTHENTICATED } from '../../../private/authStatusTypes';
import styles from '../../Header.less';
import classnames from 'classnames';
import UserAccountMenu from '../UserAccountMenu/UserAccountMenu';
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
      language,
      loginAvailable,
      authenticationStatus,
      userName,
      brandStyles,
      loginTitle,
      loginUrl,
      signupTitle,
      signupUrl
    } = this.props;

    if (loginAvailable) {
      switch (authenticationStatus) {
        case AUTHENTICATED:
          return (
            <div >

              <span>
                <div onClick={this.handleMenuToggleClick}>
                  <span className={styles.primaryNavLinkWrapper}>
                    <a className={classnames(styles.primaryNavLink, brandStyles.primaryNavLink)}>
                      <Text>{userName}</Text>
                      <ChevronIcon svgClassName={styles.chevronSvg} direction="down" />
                    </a>
                  </span>
                </div>
              </span>
              <span>
                {this.state.menuOpen && <UserAccountMenu />}
              </span>
            </div>
          );

        case UNAUTHENTICATED:
          return (
            <div className={styles.secondaryNav}>
              <ButtonGroup>
                <Button
                  color='secondary'
                  compact
                  component="a"
                  href={loginUrl}>
                  {loginTitle}
                </Button>
                <Button
                  color='callToAction'
                  compact
                  component="a"
                  href={signupUrl}>
                  {signupTitle}
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
  language: PropTypes.string,
  loginAvailable: PropTypes.bool.isRequired,
  authenticationStatus: PropTypes.string.isRequired,
  userName: PropTypes.string,
  brandStyles: PropTypes.object,
  loginTitle: PropTypes.string,
  loginUrl: PropTypes.string,
  signupTitle: PropTypes.string,
  signupUrl: PropTypes.string,
  onMenuToggle: PropTypes.func
};
