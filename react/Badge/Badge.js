/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit';

import styles from './Badge.less';
import { TONE } from '../private/tone';

export default class Badge extends PureComponent {
  static displayName = 'Badge';

  static defaultProps = {
    tone: TONE.NEUTRAL
  };

  render() {
    const { children, tone, strong, ...restProps } = this.props;

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [styles[tone]]: tone,
          [styles.strong]: strong
        })}
        {...omit(restProps, 'className')}
      >
        {children}
      </div>
    );
  }
}
