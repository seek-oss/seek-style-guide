import styles from './Section.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Section({ children, className, header, slim }) {
  return (
    <div
      className={classnames({
        [className]: className,
        [styles.root]: true,
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
  header: PropTypes.bool,
  slim: PropTypes.bool
};
