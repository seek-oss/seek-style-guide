import styles from './Columns.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

const renderColumn = (el, index) => (
  <div key={index} className={styles.column}>{el}</div>
);

export default function Columns({ children, tight }) {
  return (
    <div
      className={classnames({
        [styles.columns]: true,
        [styles.columns_tight]: tight
      })}>
      {children.map(renderColumn)}
    </div>
  );
}

Columns.propTypes = {
  children: PropTypes.array.isRequired,
  tight: PropTypes.bool
};
