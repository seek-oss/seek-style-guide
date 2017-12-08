import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FbIcon from 'seek-asia-style-guide/react/FacebookIcon/FacebookIcon';
import styles from './nav.less';

const noop = i => i;

class Nav extends Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
    messages: PropTypes.object.isRequired,
    isRightAligned: PropTypes.bool
  }

  static defaultProps = {
    isRightAligned: false
  }

  constructor(props) {
    super(props);
    this.state = {
      isDropdownVisible: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  getDropdownVisibility(key) {
    return this.state.isDropdownVisible && this.state.isDropdownVisible[key];
  }

  setDropdownVisibility(key, isVisible) {
    const eventAction = isVisible ? 'addEventListener' : 'removeEventListener';
    document[eventAction]('click', this.handleClick, false);
    const dropdownVisibleTracker = {};
    dropdownVisibleTracker[key] = isVisible;
    this.setState({
      isDropdownVisible: dropdownVisibleTracker
    });
  }

  clearAllDropdownVisibility() {
    const dropdownVisibleStates = this.state.isDropdownVisible;
    if (dropdownVisibleStates) {
      for (const key in dropdownVisibleStates) {
        this.setDropdownVisibility(key, false);
      }
    }
  }

  handleClick(e) {
    if (!this.dropdownNode.contains(e.target)) {
      this.setDropdownVisibility(false);
    }
  }

  render() {
    const { links, messages, isRightAligned } = this.props;
    return (
      <ul
        className={
          classNames({
            [styles.container]: true,
            [styles.isRightAligned]: isRightAligned
          })
        }>
        {
          links.map(link => {
            const hasChildren = Boolean(link.childLinks.length);
            const isVisible = hasChildren ? this.getDropdownVisibility(link.href) : false;
            const clickHandler = hasChildren ?
              e => {
                if (!isVisible) {
                  this.setDropdownVisibility(link.href, true);
                }
                e.preventDefault();
              } :
              noop;

            return (
              <li
                key={link.text}
                className={
                  classNames({
                    [styles.item]: true,
                    [styles.itemHasDropdown]: hasChildren,
                    [styles.itemShowDropdown]: hasChildren && isVisible
                  })
                }>
                <a
                  className={
                    classNames({
                      [styles.link]: true,
                      [styles.linkIsActive]: link.isActive,
                      [styles.linkHideOnMobile]: link.hideOnMobile
                    })
                  }
                  onClick={clickHandler}
                  href={messages[link.href] || link.href}
                  title={messages[link.title]}>

                  <span>
                    {link.preventTranslation ? link.text : messages[link.text]}
                  </span>
                </a>
                {
                  hasChildren &&
                  (
                    <ul
                      className={styles.dropdownList}
                      ref={node => {
                        this.dropdownNode = node;
                      }}>
                      {
                        link.childLinks.map(childLink => (
                          <li
                            key={childLink.text}
                            className={styles.dropdownItem}>
                            {
                              childLink.isSectionHeader ?
                                (
                                  <span className={styles.sectionHeader}>
                                    {messages[childLink.text]}
                                  </span>
                                ) :
                                (
                                  <a
                                    className={
                                      classNames({
                                        [styles.dropdownLink]: true,
                                        [styles.linkHideOnMobile]: childLink.hideOnMobile,
                                        [styles.linkOnlyOnMobile]: childLink.onlyOnMobile,
                                        [styles.hasDivider]: childLink.hasDivider
                                      })
                                    }
                                    href={messages[childLink.href]}
                                    title={messages[childLink.title]}>
                                    {childLink.hasIcon && <FbIcon className={styles.fbIcon} />}
                                    <span>{messages[childLink.text]}</span>
                                  </a>
                                )
                            }
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default Nav;
