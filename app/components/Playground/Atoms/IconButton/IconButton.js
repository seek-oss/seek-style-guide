import styles from './IconButton.less';
import React, { PropTypes } from 'react';

import { PlusIcon, DeleteIcon } from 'seek-style-guide/react';

export default function IconButton({ children, icon }) {
  return (
    <button className={styles.root}>
      {icon === 'plus' ? <PlusIcon /> : null }
      {icon === 'delete' ? <DeleteIcon /> : null }
      {children}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOf(['plus', 'delete']).isRequired
};
