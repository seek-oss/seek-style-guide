import styles from './SandboxTogglePanel.less';

import React, { PropTypes } from 'react';

export default function SandboxTogglePanel({ children }) {
  return (
    <div className={styles.root}>{children}</div>
  );
}

SandboxTogglePanel.propTypes = {
  children: PropTypes.node.isRequired
};
