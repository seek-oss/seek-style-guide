import logoMarkup from './logo.svg';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Logo({ svgClassName, ...restProps }) {
  const svgWithClasses = logoMarkup
    .replace('<svg ', `<svg class="${classnames(svgClassName)}" `);

  return (
    <div dangerouslySetInnerHTML={{ __html: svgWithClasses }} {...restProps} /> // eslint-disable-line react/no-danger
  );
}

Logo.propTypes = {
  svgClassName: PropTypes.string,
  className: PropTypes.string
};

Logo.defaultProps = {
  svgClassName: '',
  className: ''
};
