import colorStyles from '../../theme/atoms/color.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Info({ children, className, ...restProps }) {
  return (
    <span {...restProps} className={classnames(colorStyles.info, className)}>
      {children}
    </span>
  );
}

Info.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
