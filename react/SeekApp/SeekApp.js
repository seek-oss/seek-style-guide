import styles from './SeekApp.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function SeekApp({ fullScreen, children }) {
  const className = classnames({
    [styles.root]: true,
    [styles.fullScreen]: fullScreen
  });

  return (
    <div className={className}>
      {children}
    </div>
  );
}

SeekApp.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node
};

SeekApp.defaultProps = {
  fullScreen: false
};
