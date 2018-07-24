// @flow
import styles from './Highlight.less';
import React from 'react';
import type { Node } from 'react';
import classnames from 'classnames';

type Props = {
  children: Node,
  secondary?: boolean,
  className?: string
};

export default function Highlight(props: Props) {
  const { children, secondary, className, ...restProps } = props;

  return (
    <mark
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles.secondary]: secondary,
        className
      })}>
      {children}
    </mark>
  );
}
