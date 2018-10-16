import styles from './Header.less';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Link, withRouter } from 'react-router-dom';
import {
  PageBlock,
  Card,
  Highlight,
  Section,
  Text,
  TextField,
  ScreenReaderOnly
} from 'seek-style-guide/react';
import Logo from './Logo/Logo';
import demoSpecExports from '../../../../../react/*/*.demo.js';
const demoSpecs = demoSpecExports.map(x => x.default);
const allRoutes = [
  { route: '/typography', title: 'Typography', category: 'Guides' },
  { route: '/page-layout', title: 'Page Layout', category: 'Guides' },
  { route: '/sandbox', title: 'Sandbox', category: 'Tools' },
  ...demoSpecs
];

const SEARCH_BAR_ID = 'search-bar-field';

const WithHighlighting = ({ highlighted, children }) => {
  if (highlighted) {
    return <Highlight tone="neutral">{children}</Highlight>;
  }

  return children;
};

const generousCompareStrings = (input, searchTerm) =>
  input
    .toLowerCase()
    .replace(' ', '')
    .indexOf(searchTerm) !== -1;

const buildRoutes = inputRoutes =>
  inputRoutes.reduce((acc, route) => {
    const category = route.category ? route.category : 'Other';
    const initialArrayVal = acc[category] ? acc[category] : [];
    return {
      ...acc,
      [category]: [...initialArrayVal, route]
    };
  }, {});

const sortRoutes = (routeA, routeB) => {
  if (!routeA.component && routeB.component) {
    return -1;
  }

  if (!routeB.component && routeA.component) {
    return 1;
  }

  if ((routeA.category || 'Other') < (routeB.category || 'Other')) {
    return -1;
  }

  if ((routeA.category || 'Other') > (routeB.category || 'Other')) {
    return 1;
  }

  if (routeA.title < routeB.title) {
    return -1;
  }

  return 1;
};

class Header extends Component {
  static propTypes = {
    fullWidth: PropTypes.bool,
    history: PropTypes.any
  };

  static defaultProps = {
    fullWidth: false
  };

  constructor() {
    super();

    this.state = {
      menuOpen: false,
      searchTerm: '',
      highlightedElement: 0,
      displayComponents: allRoutes
    };
    this.searchBarRef = React.createRef();
    this.highlightedRef = React.createRef();
  }

  componentDidMount = () => {
    const searchbar = this.searchBarRef.current.input;

    document.addEventListener('keydown', event => {
      if (event.key === '/' && event.target.id !== SEARCH_BAR_ID) {
        event.preventDefault();
        this.handleMenuToggle({ target: { checked: true } });
      } else if (event.key === 'Escape') {
        event.preventDefault();
        this.handleMenuClose({ target: { id: '' } });
      }
    });

    searchbar.addEventListener('keydown', event => {
      const { highlightedElement, displayComponents } = this.state;
      if (event.key === 'Enter') {
        const route = this.highlightedRef.current.props.to;
        this.props.history.push(route);
        this.handleMenuClose({ target: { id: '' } });
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        const newIndex = highlightedElement - 1;
        this.setState({
          highlightedElement: newIndex < 0 ? 0 : newIndex
        });
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        const newIndex = highlightedElement + 1;
        const totalLength = displayComponents.length;
        this.setState({
          highlightedElement:
            newIndex < totalLength ? newIndex : totalLength - 1
        });
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
    const searchTerm = event.target.value.toLowerCase().replace(' ', '');
    const filteredResults = allRoutes.filter(component =>
      generousCompareStrings(component.title, searchTerm)
    );
    this.setState({ displayComponents: filteredResults, searchTerm });
  };

  applyHighlighting = routeList => {
    const { highlightedElement } = this.state;
    return routeList.map((route, index) => ({
      ...route,
      highlighted: index === highlightedElement
    }));
  };

  render() {
    const { fullWidth } = this.props;
    const { menuOpen, displayComponents } = this.state;

    const headerClasses = classnames({
      [styles.headerBlock]: true,
      [styles.fixedHeaderBlock]: menuOpen,
      [styles.fullWidth]: fullWidth
    });

    const sortedRoutes = displayComponents.sort(sortRoutes);

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

                      {Object.entries(
                        buildRoutes(this.applyHighlighting(sortedRoutes))
                      ).map(([category, routes]) => {
                        const title = routes[0].component ?
                          `${category} Components` :
                          category;
                        return (
                          <Fragment key={category}>
                            <Card transparent>
                              <h2>
                                <Text headline>{title}</Text>
                              </h2>
                            </Card>
                            <Card transparent>
                              {routes.map(demoSpec => (
                                <WithHighlighting
                                  key={demoSpec.title}
                                  highlighted={demoSpec.highlighted}>
                                  <Text headline regular>
                                    <Link
                                      ref={
                                        demoSpec.highlighted ?
                                          this.highlightedRef :
                                          ''
                                      }
                                      className={styles.link}
                                      to={demoSpec.route}>
                                      {demoSpec.title}
                                    </Link>
                                  </Text>
                                </WithHighlighting>
                              ))}
                            </Card>
                          </Fragment>
                        );
                      })}
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

export default withRouter(Header);
