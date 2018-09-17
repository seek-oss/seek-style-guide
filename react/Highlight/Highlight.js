// @flow
import styles from './Highlight.less';
import React from 'react';
import classnames from 'classnames';
import { TONE } from '../Section/Section';

export const NEUTRAL = 'neutral';

type Props = {
  children: React$Node,
  secondary?: boolean,
  className?: string,
  tone: TONE.CRITICAL | typeof NEUTRAL
};

export default function Highlight(props: Props) {
  const { children, secondary, tone = NEUTRAL, className, ...restProps } = props;

  return (
    <mark
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles.secondaryText]: secondary,
        [styles[tone]]: true,
        className
      })}>
      {children}
    </mark>
  );
}
