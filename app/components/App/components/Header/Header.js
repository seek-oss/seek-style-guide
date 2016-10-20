import styles from './Header.less';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import { Logo } from 'seek-style-guide/react';
import GridContainer from 'GridContainer/GridContainer';

const fields = ['textfield', 'autosuggest'];

export default function Header({ title }) {
  const fieldsClassName = classnames({
    [styles.menuItem]: true,
    [styles.active]: fields.indexOf(title) > -1
  });

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
          <Link className={styles.menuItem} activeClassName={styles.active} to="/" onlyActiveOnIndex={true}>Home</Link>
          <Link className={styles.menuItem} activeClassName={styles.active} to="typography">Typography</Link>
          <div className={fieldsClassName}>
            Fields
            <ul className={styles.submenu}>
              <Link className={styles.link} to="textfield"><li>Textfield</li></Link>
              <Link className={styles.link} to="autosuggest"><li>Autosuggest</li></Link>
            </ul>
          </div>
          <Link className={styles.menuItem} activeClassName={styles.active} to="buttons">Buttons</Link>
          <Link className={styles.menuItem} activeClassName={styles.active} to="icons">Icons</Link>
        </div>
      </div>
    </GridContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
