import styles from './SandboxPreview.less';

import React, { PropTypes } from 'react';

export default function SandboxPreview({ children }) {
  return (
    <div className={styles.root}>{children}</div>
  );
}

SandboxPreview.propTypes = {
  children: PropTypes.node.isRequired
};
