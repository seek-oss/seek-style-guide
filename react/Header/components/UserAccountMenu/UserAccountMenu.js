import styles from './UserAccountMenu.less';

import React from 'react';
import PropTypes from 'prop-types';

export default function UserAccountMenu() {

  return (
    <ul className={styles.root}>
      <li className={styles.item}>1</li>
      <li className={styles.item}>2</li>
      <li className={styles.item}>3</li>
    </ul>
  );
}

UserAccountMenu.propTypes = {

};
