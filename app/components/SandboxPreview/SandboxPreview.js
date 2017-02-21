import styles from './SandboxPreview.less';
import classnames from 'classnames';

import React, { PropTypes } from 'react';

export default function SandboxPreview({ children, className }) {
  return (
    <div className={classnames({ [className]: className, [styles.root]: true })}>
      {children}
    </div>
  );
}

SandboxPreview.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
