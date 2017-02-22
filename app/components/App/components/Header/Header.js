import styles from './Header.less';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Logo } from 'seek-style-guide/react';
import GridContainer from 'GridContainer/GridContainer';

export default function Header({ title }) {
  return (
    <GridContainer>
      <div className={styles.root}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
          <p className={styles.title}>{title}</p>
        </div>
        <div>
          <Link className={styles.link} activeClassName={styles.active} to="/" onlyActiveOnIndex={true}>Home</Link>
          <Link className={styles.link} activeClassName={styles.active} to="typography">Typography</Link>
          <Link className={styles.link} activeClassName={styles.active} to="buttons">Buttons</Link>
          <Link className={styles.link} activeClassName={styles.active} to="textfields">Textfields</Link>
          <Link className={styles.link} activeClassName={styles.active} to="autosuggest">Autosuggest</Link>
          <Link className={styles.link} activeClassName={styles.active} to="textarea">Textarea</Link>
          <Link className={styles.link} activeClassName={styles.active} to="monthpicker">Month picker</Link>
          <Link className={styles.link} activeClassName={styles.active} to="checkbox">Checkbox</Link>
          <Link className={styles.link} activeClassName={styles.active} to="icons">Icons</Link>
          <Link className={styles.link} activeClassName={styles.active} to="dropdown">Dropdown</Link>
          <Link className={styles.link} activeClassName={styles.active} to="rating">Rating</Link>
        </div>
      </div>
    </GridContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
