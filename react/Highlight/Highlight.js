// @flow
import styles from './Highlight.less';
import React from 'react';
import classnames from 'classnames';
import { TONE } from '../private/tone';

type Props = {
  children: React$Node,
  secondary?: boolean,
  className?: string,
  tone?: typeof TONE.CRITICAL
};

export default function Highlight(props: Props) {
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
