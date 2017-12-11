import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
      isDropdownVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  setDropdownVisibility(isVisible) {
    const eventAction = isVisible ? 'addEventListener' : 'removeEventListener';
    document[eventAction]('click', this.handleClick, false);
    this.setState({
      isDropdownVisible: isVisible
    });
  }

  parseHrefWithHrefParams(href, hrefParams) {
    let parsedHref = href;
    if (hrefParams) {
      for (const hrefParamKey in hrefParams) {
        parsedHref = `${href}${hrefParamKey}=${hrefParams[hrefParamKey]}`;
      }
    }
    return parsedHref;
  }

  handleClick(e) {
    if (!this.dropdownNode.contains(e.target)) {
      this.setDropdownVisibility(false);
    }
  }

  render() {
    const { links, messages, isRightAligned } = this.props;
    const { isDropdownVisible } = this.state;
    return (
      <ul
        className={
          classNames({
            [styles.container]: true,
            [styles.rightAligned]: isRightAligned
          })
        }>
        {
          links.map(link => {
            const hasChildren = Boolean(link.childLinks.length);
            const clickHandler = hasChildren ?
              e => {
                if (!isDropdownVisible) {
                  this.setDropdownVisibility(true);
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
                    [styles.itemShowDropdown]: hasChildren && isDropdownVisible
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
                  href={
                    this.parseHrefWithHrefParams(
                      messages[link.href] || link.href,
                      link.hrefParams
                    )
                  }
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
                          <li key={childLink.text}>
                            <a
                              className={
                                classNames({
                                  [styles.dropdownLink]: true,
                                  [styles.linkHideOnMobile]: childLink.hideOnMobile,
                                  [styles.linkOnlyOnMobile]: childLink.onlyOnMobile,
                                  [styles.hasDivider]: childLink.hasDivider
                                })
                              }
                              href={this.parseHrefWithHrefParams(messages[childLink.href], childLink.hrefParams)}
                              title={messages[childLink.title]}>
                              <span>{messages[childLink.text]}</span>
                            </a>
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
