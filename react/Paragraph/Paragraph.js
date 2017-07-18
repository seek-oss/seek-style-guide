import styles from './Paragraph.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Paragraph({ children, className, ...restProps }) {
  return (
    <p {...restProps} className={classnames(styles.root, className)}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
