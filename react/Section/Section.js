import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Section.less';

export default function Section({ children, className, header, breakout, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.header]: header,
        [styles.breakout]: breakout
      })}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.bool,
  breakout: PropTypes.bool
};

Section.defaultProps = {
  className: '',
  header: false,
  breakout: false
};
