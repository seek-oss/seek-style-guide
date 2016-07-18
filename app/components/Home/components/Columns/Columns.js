import styles from './Columns.less';

import React, { PropTypes } from 'react';

const renderColumn = (el, index) => (
  <div key={index} className={styles.column}>{el}</div>
);

export default function Columns({ children }) {
  return (
    <div className={styles.columns}>
      {children.map(renderColumn)}
    </div>
  );
}

Columns.propTypes = {
  children: PropTypes.array.isRequired
};
