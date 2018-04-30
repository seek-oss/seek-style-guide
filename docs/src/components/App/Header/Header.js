import styles from './Header.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Link } from 'react-router-dom';
import { PageBlock, Card, Section, Text, ScreenReaderOnly } from 'seek-style-guide/react';
import Logo from './Logo/Logo';
import demoSpecExports from '../../../../../react/*/*.demo.js';
const demoSpecs = demoSpecExports.map(x => x.default);

export default class Header extends Component {
  static propTypes = {
    fullWidth: PropTypes.bool
  };

  static defaultProps = {
    fullWidth: false
  };

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
    const { fullWidth } = this.props;
    const { menuOpen } = this.state;

    const headerClasses = classnames({
      [styles.headerBlock]: true,
      [styles.fixedHeaderBlock]: menuOpen,
      [styles.fullWidth]: fullWidth
    });

    return (
      <div>
        <PageBlock className={headerClasses}>
          <Section className={styles.headerSection}>
            <div className={styles.sectionContent}>
              <Link className={styles.logoLink} to="/" onClick={this.handleMenuClose}>
                <Logo svgClassName={styles.logo} />
                <h1 className={styles.title}><ScreenReaderOnly>SEEK </ScreenReaderOnly>Style Guide</h1>
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
                  <PageBlock className={fullWidth ? styles.fullWidth : null}>
                    <Section header>
                      <Card transparent>
                        <Text headline regular><Link className={styles.link} to="/">Home</Link></Text>
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text headline>Guides</Text>
                        </h2>
                      </Card>
                      <Card transparent>
                        <Text headline regular><Link className={styles.link} to="/typography">Typography</Link></Text>
                        <Text headline regular><Link className={styles.link} to="/page-layout">Page Layout</Link></Text>
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text headline>Tools</Text>
                        </h2>
                      </Card>
                      <Card transparent>
                        <Text headline regular><Link className={styles.link} to="/sandbox">Sandbox</Link></Text>
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text headline>Layout Components</Text>
                        </h2>
                      </Card>
                      <Card transparent>
                        {
                          demoSpecs
                            .filter(({ category }) => category === 'Layout')
                            .map(demoSpec => (
                              <Text headline regular key={demoSpec.title}>
                                <Link className={styles.link} to={demoSpec.route}>
                                  { demoSpec.title }
                                </Link>
                              </Text>
                            ))
                        }
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text headline>Typography Components</Text>
                        </h2>
                      </Card>
                      <Card transparent>
                        {
                          demoSpecs
                            .filter(({ category }) => category === 'Typography')
                            .map(demoSpec => (
                              <Text headline regular key={demoSpec.title}>
                                <Link className={styles.link} to={demoSpec.route}>
                                  { demoSpec.title }
                                </Link>
                              </Text>
                            ))
                        }
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text headline>Form Components</Text>
                        </h2>
                      </Card>
                      <Card transparent>
                        {
                          demoSpecs
                            .filter(({ category }) => category === 'Form')
                            .map(demoSpec => (
                              <Text headline regular key={demoSpec.title}>
                                <Link className={styles.link} to={demoSpec.route}>
                                  { demoSpec.title }
                                </Link>
                              </Text>
                            ))
                        }
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text headline>Other Components</Text>
                        </h2>
                      </Card>
                      <Card transparent>
                        {
                          demoSpecs
                            .filter(({ category }) => !category)
                            .map(demoSpec => (
                              <Text headline regular key={demoSpec.title}>
                                <Link className={styles.link} to={demoSpec.route}>
                                  { demoSpec.title }
                                </Link>
                              </Text>
                            ))
                        }
                      </Card>
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
