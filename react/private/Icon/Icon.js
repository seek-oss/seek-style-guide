import styles from './Icon.less';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import withTextProps, { SizePropTypes } from '../withTextProps';

function Icon({
  markup,
  className,
  svgClassName,
  size,
  ...restProps }) {
  const svgClassNames = classnames(
    styles.svg,
    svgClassName,
    { [styles[`${size}Svg`]]: size }
  );

  const svgWithClasses = markup
    .replace('<svg ', `<svg class="${svgClassNames}" `);
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
  size: SizePropTypes.isRequired
};

Icon.defaultProps = {
  svgClassName: '',
  className: ''
};

export default withTextProps()(Icon);

