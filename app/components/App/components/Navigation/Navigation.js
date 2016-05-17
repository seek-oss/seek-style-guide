import styles from './Navigation.less';

import React from 'react';
import NavLink from 'NavLink/NavLink';

export default function Navigation() {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles.link} to="/theme">Theme</NavLink>
          <nav>
            <ul className={styles.list}>
              <li><NavLink className={styles.link} to="/theme/color-palette">Color Palette</NavLink></li>
              <li><NavLink className={styles.link} to="/theme/type-hierarchy">Type Hierarchy</NavLink></li>
              <li><NavLink className={styles.link} to="/theme/font-stack">Font Stack</NavLink></li>
            </ul>
          </nav>
        </li>
        <li>
          <NavLink className={styles.link} to="/components">Components</NavLink>
          <nav>
            <ul className={styles.list}>
              <li><NavLink className={styles.link} to="/components/BlueButton">BlueButton</NavLink></li>
              <li><NavLink className={styles.link} to="/components/TextField">TextField</NavLink></li>
            </ul>
          </nav>
        </li>
      </ul>
    </nav>
  );
}
