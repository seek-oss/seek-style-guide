import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './Hidden.less';

const Hidden = ({ children, xs, sm, md, lg, df, print, screen }) => (
  <span
    className={classNames({
      [styles.xs]: xs,
      [styles.sm]: sm,
      [styles.md]: md,
      [styles.lg]: lg,
      [styles.df]: df,
      [styles.print]: print,
      [styles.screen]: screen,
    })}
  >{children}</span>
);

Hidden.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  df: PropTypes.bool,
  print: PropTypes.bool,
  screen: PropTypes.bool,
};

Hidden.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  df: false,
  print: false,
  screen: false,
};

export default Hidden;
