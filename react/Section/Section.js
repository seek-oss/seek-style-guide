/* eslint-disable react/prop-types */
import classnames from 'classnames';
import React from 'react';

import styles from './Section.less';

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
      })}
    >
      {children}
    </div>
  );
}

Section.defaultProps = {
  className: '',
  header: false,
  pullout: false,
  slim: false,
  tone: '',
  level: ''
};
