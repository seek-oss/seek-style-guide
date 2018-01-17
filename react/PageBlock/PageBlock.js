import styles from './PageBlock.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function PageBlock({ children, className, wide, ...restProps }) {
  return (
    <div {...restProps} className={classnames(className)}>
      <div className={classnames({ [styles.content]: true, [styles.wide]: wide })}>{children}</div>
    </div>
  );
}

PageBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool
};
