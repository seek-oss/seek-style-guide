import styles from './Header.less';
import React, { Component } from 'react';
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

    return (
      <div>
        <div className={styles.headerPlaceholder} />
        <PageBlock className={styles.headerBlock}>
          <Section className={styles.headerSection}>
            <Link to="/" onClick={this.handleMenuClose}>
              <Logo svgClassName={styles.logo} />
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
                <div className={styles.bar1} />
                <div className={styles.bar2} />
                <div className={styles.bar3} />
                <span className={styles.hamburgerText}>Show menu</span>
              </label>

              <div className={styles.menu} onClick={this.handleMenuClose}>
                <PageBlock>
                  <Section header>
                    <Text hero>Style Guide</Text>
                  </Section>
                  <Section slim>
                    <Text heading strong>
                      <Link className={styles.link} to="/">Home</Link>
                    </Text>

                    {
                      demoSpecs.map(demoSpec => (
                        <Text heading strong key={demoSpec.title}>
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
          </Section>
        </PageBlock>
      </div>
    );
  }
}
