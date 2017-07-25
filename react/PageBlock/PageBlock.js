import styles from './PageBlock.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function PageBlock({ children, className, ...restProps }) {
  return (
    <div {...restProps} className={classnames(className, styles.content)}>
      {children}
    </div>
  );
}

PageBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
