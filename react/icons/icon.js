import styles from './Icon.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Icon({ markup, className, svgClassName, ...restProps }) {
  const svgWithClasses = markup
    .replace('<svg ', `<svg class="${classnames(styles.svg, svgClassName)}" `);
  const combinedProps = {
    ...restProps,
    className: classnames(styles.root, className)
  };

  return (
    <span dangerouslySetInnerHTML={{ __html: svgWithClasses }} {...combinedProps} /> // eslint-disable-line react/no-danger
  );
}

Icon.propTypes = {
  markup: PropTypes.string.isRequired,
  svgClassName: PropTypes.string,
  className: PropTypes.string
};

Icon.defaultProps = {
  svgClassName: '',
  className: ''
};
