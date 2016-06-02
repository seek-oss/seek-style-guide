import styles from './Header.less';

import React, { PropTypes } from 'react';
import { Logo } from 'seek-style-guide/react';
import GridContainer from 'GridContainer/GridContainer';

export default function Header({ title }) {
  return (
    <GridContainer>
      <div className={styles.logo}>
        <Logo />
        <p className={styles.title}>{title}</p>
      </div>
    </GridContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
