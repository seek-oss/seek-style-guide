// @flow
import styles from './Pill.less';

import React, { Component } from 'react';
import classnames from 'classnames';

import Text from '../Text/Text';
import CrossIcon from '../CrossIcon/CrossIcon';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';

type Props = {
  text: string,
  onClose?: Function
};

export default class Pill extends Component<Props> {
  static displayName = 'Pill';

  props: Props

  handleClose = event => this.props.onClose(event);

  renderStaticPill(className) {
    const { text, ...restProps } = this.props;
    return (
      <span className={classnames(className, styles.staticPill)} {...restProps}>
        <Text baseline={false} raw>{text}</Text>
      </span>
    );
  }

  renderInteractivePill(className) {
    const { text, onClose, ...restProps } = this.props;
    return (
      <span
        className={classnames(className, styles.interactivePill)}
        {...restProps}>
        <Text baseline={false} raw>{text}</Text>
        <button
          className={styles.removeButton}
          onClick={onClose}>
          <ScreenReaderOnly>Remove item {text}</ScreenReaderOnly>
          <CrossIcon
            className={styles.removeIcon}
            svgClassName={styles.removeSvg}
          />
        </button>
      </span>
    );
  }

  render() {
    const { text, onClose, ...restProps } = this.props;
    const className = restProps.className || '';
    return onClose ?
      this.renderInteractivePill(className) :
      this.renderStaticPill(className);
  }
}
