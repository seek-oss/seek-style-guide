import styles from './Logo.less';
import logoMarkup from './logo.svg';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Logo({ svgClassName, invert, ...restProps }) {
  const svgClasses = classnames(svgClassName, {
    [styles.root]: true,
    [styles.invert]: invert
  });
  const svgWithClasses = logoMarkup
    .replace('<svg ', `<svg class="${svgClasses}" `);

  return (
    <div dangerouslySetInnerHTML={{ __html: svgWithClasses }} {...restProps} /> // eslint-disable-line react/no-danger
  );
}

Logo.propTypes = {
  svgClassName: PropTypes.string,
  invert: PropTypes.bool,
  className: PropTypes.string
};

Logo.defaultProps = {
  svgClassName: '',
  className: ''
};
