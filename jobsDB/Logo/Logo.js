import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import markup from './JobsDBLogo.svg';
import styles from './Logo.less';

export default function Logo({ svgClassName, className, ...restProps }) {
  const svgWithClasses = markup
    .replace('<svg ', `<svg class="${svgClassName}" `);

  return (
    <span className={classnames(styles.logoWrapper, className)} dangerouslySetInnerHTML={{ __html: svgWithClasses }} {...restProps} /> // eslint-disable-line react/no-danger
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
