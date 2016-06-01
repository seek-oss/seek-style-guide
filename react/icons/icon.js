import styles from './Icon.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Icon(props) {
  const { markup, className, svgClassName, ...restProps } = props;
  const svgWithClassName = markup
    .replace('<svg ', `<svg class="${svgClassName}" `);
  const combinedProps = {
    ...restProps,
    className: classnames(styles.root, className)
  };

  return (
    <span dangerouslySetInnerHTML={{ __html: svgWithClassName }} { ...combinedProps } /> // eslint-disable-line react/no-danger
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
