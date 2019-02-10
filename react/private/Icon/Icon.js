import styles from './Icon.less';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import withTextProps, { SizePropTypes } from '../withTextProps';

function Icon({ markup, className, svgClassName, size, ...restProps }) {
  const svgClassNames = classnames(styles.svg, svgClassName, {
    [styles[`${size}Svg`]]: size
  });

  const svgWithClasses = markup.replace(
    '<svg ',
    `<svg class="${svgClassNames}" `
  );
  const combinedProps = {
    ...restProps,
    className: classnames(styles.root, className)
  };

  return (
    <span
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svgWithClasses }}
      {...combinedProps}
    />
  );
}

Icon.propTypes = {
  markup: PropTypes.string.isRequired,
  svgClassName: PropTypes.string,
  className: PropTypes.string,
  ...SizePropTypes
};

Icon.defaultProps = {
  svgClassName: '',
  className: ''
};

export default withTextProps(Icon);
