import styles from './NavLink.less';

import React from 'react';
import { Link } from 'react-router';

export default function NavLink(props) {
  return (
    <Link {...props} activeClassName={styles.active} />
  );
}
