/* eslint-disable react/prop-types */
import styles from './Highlight.less';
import React from 'react';
import classnames from 'classnames';

export default function Highlight(props) {
  const { children, secondary, tone, className, ...restProps } = props;

  return (
    <mark
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles.secondaryText]: secondary,
        [styles[tone]]: tone,
        ...(className ? { [className]: className } : {})
      })}
    >
      {children}
    </mark>
  );
}
