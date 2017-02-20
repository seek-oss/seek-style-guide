import styles from './Section.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Section({ children, className, group, header, slim, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.group]: group,
        [styles.header]: header,
        [styles.slim]: slim
      })}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  group: PropTypes.bool,
  header: PropTypes.bool,
  slim: PropTypes.bool
};
