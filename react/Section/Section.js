import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Section.less';

export default function Section({ children, className, header, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.header]: header
      })}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.bool
};
