import styles from './Navigation.less';

import React from 'react';
import NavLink from 'NavLink/NavLink';

export default function Navigation() {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles.link} to="/typography">Typography</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/colours">Colour Palette</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/grid">Grid</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/icons">Icons</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/buttons">Buttons</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/fields">Fields</NavLink>
        </li>
      </ul>
    </nav>
  );
}
