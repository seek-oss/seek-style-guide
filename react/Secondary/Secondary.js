import colorStyles from '../../theme/atoms/color.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Secondary({ children, className, ...restProps }) {
  return (
    <span {...restProps} className={classnames(colorStyles.secondary, className)}>
      {children}
    </span>
  );
}

Secondary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
