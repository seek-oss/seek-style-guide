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
  customStyle,
  ...restProps }) {
  const svgClassNames = classnames(
    styles.svg,
    svgClassName,
    { [styles[`${size}Svg`]]: customStyle || size },
    { [styles[`${size}Svg${customStyle}`]]: customStyle }
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
  customStyle: PropTypes.string,
  ...SizePropTypes
};

Icon.defaultProps = {
  svgClassName: '',
  className: ''
};

export default withTextProps(Icon);
