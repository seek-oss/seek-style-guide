import styles from './Icon.less';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Icon({ markup, className, svgClassName, size, ...restProps }) {
  const svgWithClasses = markup
    .replace('<svg ', `<svg class="${classnames(styles.svg, svgClassName, { [styles[`${size}Svg`]]: size })}" `);
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
  className: PropTypes.string,
  size: PropTypes.oneOf(['heading', 'substandard', 'superstandard'])
};

Icon.defaultProps = {
  svgClassName: '',
  className: ''
};
