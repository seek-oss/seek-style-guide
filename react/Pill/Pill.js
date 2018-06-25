// @flow
import styles from './Pill.less';
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import classnames from 'classnames';

import Text from '../Text/Text';
import CrossIcon from '../CrossIcon/CrossIcon';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';

type Props = {
  text: PropTypes.node,
  onClose?: Function,
  className?: string
};

export default class Pill extends Component<Props> {
  static displayName = 'Pill';

  props: Props

  handleClose = (event: Object) => {
    const { onClose } = this.props;
    if (onClose) {
      onClose(event);
    }
  }

  renderStaticPill() {
    const { text, className, ...restProps } = this.props;
    return (
      <span className={classnames(className, styles.staticPill)} {...restProps}>
        <Text baseline={false} raw>{text}</Text>
      </span>
    );
  }

  renderInteractivePill() {
    const { text, onClose, className, ...restProps } = this.props;
    return (
      <span
        className={classnames(className, styles.interactivePill)}
        {...restProps}>
        <Text baseline={false} raw>{text}</Text>
        <button
          className={styles.removeButton}
          onClick={onClose}>
          <ScreenReaderOnly>Remove item {text}</ScreenReaderOnly>
          <div className={styles.removeCircle}>
            <CrossIcon
              className={styles.removeIcon}
              svgClassName={styles.removeSvg}
            />
          </div>
        </button>
      </span>
    );
  }

  render() {
    const { onClose } = this.props;
    return onClose ?
      this.renderInteractivePill() :
      this.renderStaticPill();
  }
}
