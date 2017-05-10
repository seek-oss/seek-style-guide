import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './Hidden.less';

const Hidden = ({ children, xs, sm, md, lg, df, print, screen }) => (
  <span
    className={classNames({
      [styles.print]: print,
      [styles.screen]: screen,
    })}
  >{children}</span>
);

Hidden.propTypes = {
  children: PropTypes.node.isRequired,
  print: PropTypes.bool,
  screen: PropTypes.bool,
};

Hidden.defaultProps = {
  print: false,
  screen: false,
};

export default Hidden;
