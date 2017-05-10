import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './Hidden.less';

const Hidden = ({ children, className, print, screen }) => (
  <span
    className={classNames(
      className,
      {
        [styles.print]: print,
        [styles.screen]: screen
      }
    )}>{children}</span>
);

Hidden.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  print: PropTypes.bool,
  screen: PropTypes.bool
};

Hidden.defaultProps = {
  className: '',
  print: false,
  screen: false
};

export default Hidden;
