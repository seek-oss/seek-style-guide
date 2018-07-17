import colorStyles from '../../theme/atoms/color.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Critical({ children, className, ...restProps }) {
  return (
    <em {...restProps} className={classnames(colorStyles.critical, className)}>
      {children}
    </em>
  );
}

Critical.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
