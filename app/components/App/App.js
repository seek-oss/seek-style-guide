import styles from './App.less';

import React, { PropTypes } from 'react';
import { SeekApp } from 'seek-style-guide/react';
import logo from './logo.svg';
import NavLink from 'NavLink/NavLink';
import Navigation from 'Navigation/Navigation';
import Main from 'Main/Main';

export default function App({ children }) {
  /* eslint-disable react/no-danger */
  return (
    <SeekApp fullScreen={true}>
      <div className={styles.root}>
        <div className={styles.navigationContainer}>
          <header>
            <h1>
              <NavLink className={styles.headerLink} to="/" onlyActiveOnIndex={true}>
                <span className={styles.headerLogo} dangerouslySetInnerHTML={{ __html: logo }} />
                <span className={styles.headerText}>Style Guide</span>
              </NavLink>
            </h1>
          </header>
          <Navigation />
        </div>
        <Main>
          {children}
        </Main>
      </div>
    </SeekApp>
  );
  /* eslint-enable react/no-danger */
}

App.propTypes = {
  children: PropTypes.node
};
