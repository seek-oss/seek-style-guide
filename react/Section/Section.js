// @flow
import classnames from 'classnames';
import React from 'react';

import styles from './Section.less';
import { TONE } from '../private/tone';
import type { Level } from '../private/level';

type Props = {
  children: any,
  className: string,
  header: boolean,
  pullout: boolean,
  slim: boolean,
  tone:
    | typeof TONE.POSITIVE
    | typeof TONE.CRITICAL
    | typeof TONE.INFO
    | typeof TONE.HELP
    | '',
  level: Level | ''
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
}: Props) {
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
