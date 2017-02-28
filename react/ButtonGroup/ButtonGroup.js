import styles from './ButtonGroup.less';
import React, { PropTypes } from 'react';

export default function ButtonGroup({ children }) {
  return (
    <div>{children.map(child => React.cloneElement(child, { className: styles.button }))}</div>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf((propValue, key, componentName) => {
    const isValid = propValue[key].type.displayName === 'Button';
    return isValid ? true : new Error(`${componentName}'s children should be of type \`Button\`.`);
  })
};

ButtonGroup.displayName = 'ButtonGroup';
