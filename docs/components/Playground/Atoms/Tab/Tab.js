import styles from './Tab.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Tab({ children, selected }) {
  return (
    <h5
      className={classnames({
        [styles.root]: true,
        [styles.selected]: selected
      })}>
      {children}
    </h5>
  );
}

Tab.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool
};
