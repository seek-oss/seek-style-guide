import styles from './Icon.less';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Icon({
  markup,
  className,
  svgClassName,
  hero,
  headline,
  heading,
  subheading,
  superstandard,
  standard,
  substandard,
  small,
  interaction,
  ...restProps }) {
  const svgClassNames = classnames(
    styles.svg,
    svgClassName,
    {
      [styles.smallSvg]: small,
      [styles.substandardSvg]: substandard,
      [styles.superstandardSvg]: superstandard,
      [styles.subheadingSvg]: subheading,
      [styles.headlineSvg]: headline,
      [styles.headingSvg]: heading,
      [styles.heroSvg]: hero
    }
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
  hero: PropTypes.bool,
  headline: PropTypes.bool,
  heading: PropTypes.bool,
  subheading: PropTypes.bool,
  superstandard: PropTypes.bool,
  standard: PropTypes.bool,
  substandard: PropTypes.bool,
  small: PropTypes.bool,
  interaction: PropTypes.bool
};

Icon.defaultProps = {
  svgClassName: '',
  className: ''
};
