import styles from './Header.less';
import brandStyle from './Header.css.js';

import React, { Component } from 'react';
import classnames from 'classnames';

import { Link } from 'react-router';
import { PageBlock, Section, Text } from 'seek-style-guide/react';
import Logo from './Logo/Logo';
import demoSpecs from '../../../demoSpecs';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    };
  }

  handleMenuToggle = event => {
    this.setState({ menuOpen: event.target.checked });
  };

  handleMenuClose = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { menuOpen } = this.state;

    const headerClasses = classnames({
      [brandStyle.headerBlock]: true,
      [styles.fixedHeaderBlock]: menuOpen
    });

    return (
      <div>
        <PageBlock className={headerClasses}>
          <Section className={styles.headerSection}>
            <div className={styles.sectionContent}>
              <Link className={classnames([styles.logoLink, brandStyle.logoLink])} to="/" onClick={this.handleMenuClose}>
                <Logo svgClassName={styles.logo} tenant={this.props.tenant}/>
                <div className={classnames([styles.title, brandStyle.title])}>{this.props.tenant} style guide</div>
              </Link>

              <div className={styles.hamburger}>
                <input
                  onChange={this.handleMenuToggle}
                  checked={menuOpen}
                  id="hamburgerCheckbox"
                  type="checkbox"
                  className={styles.checkbox}
                />
                <label htmlFor="hamburgerCheckbox" className={styles.bars}>
                  <div className={classnames([styles.bar1, brandStyle.bar])} />
                  <div className={classnames([styles.bar2, brandStyle.bar])} />
                  <div className={classnames([styles.bar3, brandStyle.bar])} />
                  <span className={styles.hamburgerText}>Show menu</span>
                </label>

                <div className={styles.menu} onClick={this.handleMenuClose}>
                  <PageBlock>
                    <Section header>
                      <Text hero><Link className={styles.link} to="/">Home</Link></Text>
                      <Text hero><Link className={styles.link} to="/page-layout">Page Layout</Link></Text>
                      {
                        demoSpecs.map(demoSpec => (
                          <Text hero key={demoSpec.title}>
                            <Link className={styles.link} to={demoSpec.route}>
                              { demoSpec.title }
                            </Link>
                          </Text>
                        ))
                      }
                    </Section>
                  </PageBlock>
                </div>
              </div>
            </div>
          </Section>
        </PageBlock>
      </div>
    );
  }
}
