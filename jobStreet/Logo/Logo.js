import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Logo.less';
import LogoIcon from './LogoIcon';

export default function Logo({
  svgClassName,
  invert,
  iconClass,
  ...restProps
}) {
  const svgClasses = classnames(svgClassName, {
    [styles.root]: true,
    [styles.invert]: invert
  });
  const height = 36;
  const width = 200;

  return (
    <div {...restProps}>
      <svg
        className={svgClasses}
        xmlns="http://www.w3.org/2000/svg"
        height={`${height}`}
        width={`${width}`}
        viewBox="0 0 200 36"
        y="0px"
        x="0px">
        <LogoIcon
          iconClass={(invert && styles.invertedLogoIcon) || iconClass}
        />
      </svg>
    </div>
  );
}

Logo.propTypes = {
  svgClassName: PropTypes.string,
  invert: PropTypes.bool,
  className: PropTypes.string,
  iconClass: PropTypes.string
};

Logo.defaultProps = {
  svgClassName: '',
  className: ''
};
