import styles from './Header.less';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Link } from 'react-router-dom';
import {
  PageBlock,
  Card,
  Section,
  Text,
  TextField,
  ScreenReaderOnly
} from 'seek-style-guide/react';
import Logo from './Logo/Logo';
import demoSpecExports from '../../../../../react/*/*.demo.js';
const demoSpecs = demoSpecExports.map(x => x.default);

const SEARCH_BAR_ID = 'search-bar-field';

const generousCompareStrings = (input, searchTerm) =>
  input
    .toLowerCase()
    .replace(' ', '')
    .indexOf(searchTerm) !== -1;

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
      menuOpen: false,
      searchTerm: '',
      displayComponents: demoSpecs
    };
    this.searchBarRef = React.createRef();
  }

  componentDidMount = () => {
    document.addEventListener('keydown', event => {
      if (event.key === '/' && event.target.id !== SEARCH_BAR_ID) {
        event.preventDefault();
        this.handleMenuToggle({ target: { checked: true } });
      } else if (event.key === 'Escape') {
        event.preventDefault();
        this.handleMenuClose({ target: { id: '' } });
      }
    });
  };

  handleMenuToggle = event => {
    this.setState({ menuOpen: event.target.checked }, () => {
      if (this.state.menuOpen) {
        this.searchBarRef.current.input.focus();
        this.searchBarRef.current.input.select();
      }
    });
  };

  handleMenuClose = event => {
    if (event.target.id !== SEARCH_BAR_ID) {
      this.setState({ menuOpen: false });
    }
  };

  handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredResults = demoSpecs.filter(component =>
      generousCompareStrings(component.title, searchTerm)
    );
    this.setState({ displayComponents: filteredResults, searchTerm });
  };

  searchMatch = inputArray =>
    inputArray.some(str => generousCompareStrings(str, this.state.searchTerm));

  render() {
    const { fullWidth } = this.props;
    const { menuOpen, displayComponents } = this.state;

    const headerClasses = classnames({
      [styles.headerBlock]: true,
      [styles.fixedHeaderBlock]: menuOpen,
      [styles.fullWidth]: fullWidth
    });

    const layoutComponents = displayComponents.filter(
      ({ category }) => category === 'Layout'
    );
    const typographyComponents = displayComponents.filter(
      ({ category }) => category === 'Typography'
    );
    const formComponents = displayComponents.filter(
      ({ category }) => category === 'Form'
    );
    const otherComponents = displayComponents.filter(
      ({ category }) => !category
    );

    return (
      <div>
        <PageBlock className={headerClasses}>
          <Section className={styles.headerSection}>
            <div className={styles.sectionContent}>
              <Link
                className={styles.logoLink}
                to="/"
                onClick={this.handleMenuClose}>
                <Logo svgClassName={styles.logo} />
                <h1 className={styles.title}>
                  <ScreenReaderOnly>SEEK </ScreenReaderOnly>
                  Style Guide
                </h1>
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
                        <Text headline regular>
                          <Link className={styles.link} to="/">
                            Home
                          </Link>
                        </Text>
                      </Card>

                      <Card transparent>
                        <TextField
                          id={SEARCH_BAR_ID}
                          label="Search"
                          ref={this.searchBarRef}
                          onChange={this.handleSearch}
                        />
                      </Card>

                      {this.searchMatch(['Typography', 'Page Layout']) && (
                        <Fragment>
                          <Card transparent>
                            <h2>
                              <Text headline>Guides</Text>
                            </h2>
                          </Card>
                          <Card transparent>
                            {this.searchMatch(['Typography']) && (
                              <Text headline regular>
                                <Link className={styles.link} to="/typography">
                                  Typography
                                </Link>
                              </Text>
                            )}
                            {this.searchMatch(['Page Layout']) && (
                              <Text headline regular>
                                <Link className={styles.link} to="/page-layout">
                                  Page Layout
                                </Link>
                              </Text>
                            )}
                          </Card>
                        </Fragment>
                      )}

                      {this.searchMatch(['Sandbox']) && (
                        <Fragment>
                          <Card transparent>
                            <h2>
                              <Text headline>Tools</Text>
                            </h2>
                          </Card>
                          <Card transparent>
                            <Text headline regular>
                              <Link className={styles.link} to="/sandbox">
                                Sandbox
                              </Link>
                            </Text>
                          </Card>
                        </Fragment>
                      )}

                      {layoutComponents.length > 0 && (
                        <Fragment>
                          <Card transparent>
                            <h2>
                              <Text headline>Layout Components</Text>
                            </h2>
                          </Card>
                          <Card transparent>
                            {layoutComponents.map(demoSpec => (
                              <Text headline regular key={demoSpec.title}>
                                <Link
                                  className={styles.link}
                                  to={demoSpec.route}>
                                  {demoSpec.title}
                                </Link>
                              </Text>
                            ))}
                          </Card>
                        </Fragment>
                      )}

                      {typographyComponents.length > 0 && (
                        <Fragment>
                          <Card transparent>
                            <h2>
                              <Text headline>Typography Components</Text>
                            </h2>
                          </Card>
                          <Card transparent>
                            {typographyComponents.map(demoSpec => (
                              <Text headline regular key={demoSpec.title}>
                                <Link
                                  className={styles.link}
                                  to={demoSpec.route}>
                                  {demoSpec.title}
                                </Link>
                              </Text>
                            ))}
                          </Card>
                        </Fragment>
                      )}

                      {formComponents.length > 0 && (
                        <Fragment>
                          <Card transparent>
                            <h2>
                              <Text headline>Form Components</Text>
                            </h2>
                          </Card>
                          <Card transparent>
                            {formComponents.map(demoSpec => (
                              <Text headline regular key={demoSpec.title}>
                                <Link
                                  className={styles.link}
                                  to={demoSpec.route}>
                                  {demoSpec.title}
                                </Link>
                              </Text>
                            ))}
                          </Card>
                        </Fragment>
                      )}

                      {otherComponents.length > 0 && (
                        <Fragment>
                          <Card transparent>
                            <h2>
                              <Text headline>Other Components</Text>
                            </h2>
                          </Card>
                          <Card transparent>
                            {otherComponents.map(demoSpec => (
                              <Text headline regular key={demoSpec.title}>
                                <Link
                                  className={styles.link}
                                  to={demoSpec.route}>
                                  {demoSpec.title}
                                </Link>
                              </Text>
                            ))}
                          </Card>
                        </Fragment>
                      )}
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
