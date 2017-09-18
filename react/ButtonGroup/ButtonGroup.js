import styles from '../Button/Button.less';
import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonGroup({ children, ...restProps }) {
  return (
    <div {...restProps} className={styles.group}>
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
