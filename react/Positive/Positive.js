import colorStyles from '../../theme/atoms/color.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Positive({ children, className, ...restProps }) {
  return (
    <span {...restProps} className={classnames(colorStyles.positive, className)}>
      {children}
    </span>
  );
}

Positive.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
