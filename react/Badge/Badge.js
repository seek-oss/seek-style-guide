// @flow

import React, { PureComponent } from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit';

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
  strong?: boolean
};

export default class Badge extends PureComponent<Props> {
  static displayName = 'Badge';

  props: Props;

  render() {
    const { children, tone, strong, ...restProps } = this.props;

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [styles[tone]]: tone,
          [styles.strong]: strong
        })}
        {...omit(restProps, 'className')}>
        {children}
      </div>
    );
  }
}
