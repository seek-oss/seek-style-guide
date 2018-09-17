// @flow
import styles from './Highlight.less';
import React from 'react';
import type { Node } from 'react';
import classnames from 'classnames';
import { TONE } from '../Section/Section';

type Props = {
  children: React$Node,
  secondary?: boolean,
  className?: string,
  tone: TONE.CRITICAL | 'neutral'
};

export default function Highlight(props: Props) {
  const { children, secondary, tone = 'neutral', className, ...restProps } = props;

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
