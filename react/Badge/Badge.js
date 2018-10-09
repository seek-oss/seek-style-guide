// @flow

import React, { PureComponent } from 'react';
import classnames from 'classnames';

import styles from './Badge.less';

type Tone =
  | 'accent'
  | 'critical'
  | 'info'
  | 'neutral'
  | 'positive'
  | 'secondary';

type Props = {
  children: React$Node,
  tone?: Tone,
  primary?: boolean
};

export default class Badge extends PureComponent<Props> {
  static displayName = 'Badge';

  props: Props;

  render() {
    const { children, tone, primary } = this.props;

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [styles[tone]]: tone,
          [styles.primary]: primary
        })}
        {...this.props}>
        {children}
      </div>
    );
  }
}
