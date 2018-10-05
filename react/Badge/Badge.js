// @flow

import React, { PureComponent } from 'react';
import classnames from 'classnames';

import styles from './Badge.less';

type Props = {
  children: React$Node,
  strong?: boolean,
  info?: boolean,
  accent?: boolean,
  critical?: boolean,
  secondary?: boolean,
  positive?: boolean
};

export default class Badge extends PureComponent<Props> {
  static displayName = 'Badge';

  props: Props;

  render() {
    const {
      info,
      accent,
      critical,
      secondary,
      positive,
      strong,
      children
    } = this.props;

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [styles.info]: info,
          [styles.accent]: accent,
          [styles.critical]: critical,
          [styles.secondary]: secondary,
          [styles.positive]: positive,
          [styles.strong]: strong
        })}
        {...this.props}
      >
        {children}
      </div>
    );
  }
}
