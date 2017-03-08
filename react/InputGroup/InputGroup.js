import styles from './InputGroup.less';
import React, { PropTypes } from 'react';

export default function InputGroup({ children, ...restProps }) {
  return (
    <div className={styles.root} {...restProps}>
      {children.map((child, index) => <div key={index} className={styles.input}>{child}</div>)}
    </div>
  );
}

InputGroup.propTypes = {
  children: PropTypes.arrayOf(React.PropTypes.node)
};

InputGroup.displayName = 'InputGroup';
