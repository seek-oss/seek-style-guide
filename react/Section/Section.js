import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Section.less';

export const TONE = {
  POSITIVE: 'positive',
  INFO: 'info',
  CRITICAL: 'critical',
  HELP: 'help'
};

export const LEVEL = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary'
};

export default function Section({
  children,
  className,
  header,
  pullout,
  slim,
  tone,
  level,
  ...restProps
}) {
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.header]: header,
        [styles.pullout]: pullout,
        [styles.slim]: slim,
        [styles[tone]]: tone,
        [styles[level]]: level
      })}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.bool,
  pullout: PropTypes.bool,
  slim: PropTypes.bool,
  tone: PropTypes.oneOf([TONE.POSITIVE, TONE.INFO, TONE.CRITICAL, TONE.HELP]),
  level: PropTypes.oneOf([LEVEL.PRIMARY, LEVEL.SECONDARY])
};

Section.defaultProps = {
  className: '',
  header: false,
  pullout: false,
  slim: false
};
