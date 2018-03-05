import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Menu.less';
import MenuItem from './components/MenuItem/MenuItem';
import { Text, Section, MoreIcon, ChevronIcon, CheckMarkIcon, GlobeIcon, EmployerIcon } from 'seek-asia-style-guide/react';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      moreMenuOpen: false,
      localesMenuOpen: false
    };
  }

  toggleMoreMenu() {
    this.setState({ moreMenuOpen: !this.state.moreMenuOpen });
  }

  toggleLocalesMenu() {
    this.setState({ localesMenuOpen: !this.state.localesMenuOpen });
  }

  renderMenuLinks = ({ links, more, messages, brandStyles }) => {
    if (links && links.map) {
      const menuItems = links.map((link, index) => (
        <MenuItem key={index} linkUrl={link.url} ItemIcon={link.ItemIcon} brandStyles={brandStyles}>
          <Text>{link.title}</Text>
        </MenuItem>
      ));

      if (more) {
        menuItems.push((
          <MenuItem key={menuItems.length} handleClick={this.toggleMoreMenu.bind(this)} ItemIcon={MoreIcon} brandStyles={brandStyles}>
            <Text>{messages['menu.more']}</Text>
          </MenuItem>
        ));
      }

      return (
        <div className={styles.menuBody}>
          {menuItems}
        </div>
      );
    }

    return null;
  }

  render() {
    const { messages, shouldShowMenu, links, locales, more, brandStyles } = this.props;
    return (
      <div className={classnames(styles.root, { [styles.showMenu]: shouldShowMenu })}>
        <Section className={styles.headerMenu}>
          <Text whisperingTitle>{messages['menu.jobSeekerHeader']}</Text>
        </Section>
        {
          this.renderMenuLinks({ links, more, messages, brandStyles })
        }
        <div className={styles.menuBody}>
          <MenuItem itemClass={styles.employerLink} linkUrl={messages['header.employerSiteUrl']} ItemIcon={EmployerIcon} brandStyles={brandStyles}>
            <Text>{messages['header.employerSiteTitle']}</Text>
          </MenuItem>
        </div>

        <Section className={styles.headerMenu}>
          <Text whisperingTitle>{messages['menu.settingsHeader']}</Text>
        </Section>
        <div className={styles.menuBody}>
          { locales && locales.length && (
            <MenuItem className={styles.countryAndLanguage} handleClick={this.toggleLocalesMenu.bind(this)} ItemIcon={GlobeIcon} brandStyles={brandStyles}>
              <div>
                <Text>Country &amp; Language</Text>
                <Text intimate className={styles.currentLocale}>{locales[0].title}</Text>
              </div>
            </MenuItem>
          )}
        </div>

        <div className={this.state.moreMenuOpen ? styles.showSubMenu : styles.subMenu}>
          <MenuItem handleClick={this.toggleMoreMenu.bind(this)} itemClass={styles.backLink} ItemIcon={ChevronIcon} iconProps={{ direction: 'left', svgClassName: styles.backChevron }} brandStyles={brandStyles}>
            <Text>{messages['menu.backToMenu']}</Text>
          </MenuItem>
          <Section className={styles.headerMenu}>
            <Text whisperingTitle>{messages['menu.moreHeader']}</Text>
          </Section>
          {more && more.map && more.map((link, index) => (
            <MenuItem key={index} linkUrl={link.url} itemClass={styles.moreItem} ItemIcon={link.ItemIcon} brandStyles={brandStyles}>
              <Text>{link.title}</Text>
            </MenuItem>
          ))}
        </div>

        <div className={this.state.localesMenuOpen ? styles.showSubMenu : styles.subMenu}>
          <MenuItem handleClick={this.toggleLocalesMenu.bind(this)} itemClass={styles.backLink} ItemIcon={ChevronIcon} iconProps={{ direction: 'left', svgClassName: styles.backChevron }} brandStyles={brandStyles}>
            <Text>{messages['menu.backToMenu']}</Text>
          </MenuItem>
          <MenuItem ItemIcon={locales[0].ItemIcon} itemClass={styles.selectedLocaleItem} brandStyles={brandStyles}>
            <span className={styles.selectedLocale}>
              <Text>{locales[0].title}</Text>
              <CheckMarkIcon className={styles.selectedLocaleCheck} svgClassName={styles.selectedLocaleCheckIcon} />
            </span>
          </MenuItem>
          {locales && locales.map && locales.map((link, index) => {
            if (index > 0) {
              return (
                <MenuItem key={index} linkUrl={link.url} ItemIcon={link.ItemIcon} brandStyles={brandStyles}>
                  <Text>{link.title}</Text>
                </MenuItem>
              );
            }

            return null;
          })}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  messages: PropTypes.object.isRequired,
  shouldShowMenu: PropTypes.bool,
  links: PropTypes.array,
  locales: PropTypes.array.isRequired,
  more: PropTypes.array,
  brandStyles: PropTypes.object.isRequired
};
