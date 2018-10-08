// @flow

import React, { PureComponent } from 'react';
import classnames from 'classnames';

import styles from './Badge.less';

type Props = {
  children: React$Node,
  strong?: boolean,
  accent?: boolean,
  critical?: boolean,
  info?: boolean,
  neutral?: boolean,
  positive?: boolean,
  secondary?: boolean
};

export default class Badge extends PureComponent<Props> {
  static displayName = 'Badge';

  props: Props;

  render() {
    const {
      children,
      accent,
      critical,
      info,
      neutral,
      positive,
      secondary,
      strong
    } = this.props;

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [styles.accent]: accent,
          [styles.critical]: critical,
          [styles.info]: info,
          [styles.neutral]: neutral,
          [styles.positive]: positive,
          [styles.secondary]: secondary,
          [styles.strong]: strong
        })}
        {...this.props}>
        {children}
      </div>
    );
  }
}
