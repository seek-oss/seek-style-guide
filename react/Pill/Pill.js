// @flow
import styles from './Pill.less';
import React, { Component } from 'react';
import classnames from 'classnames';
import Text from '../Text/Text';
import CrossIcon from '../CrossIcon/CrossIcon';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';

type Props = {
  children?: React$Node,
  buttonType?: string,
  text?: React$Node,
  onClose?: Function,
  className?: string
};

export default class Pill extends Component<Props> {
  static displayName = 'Pill';

  props: Props;

  handleClose = (event: Object) => {
    const { onClose } = this.props;
    if (onClose) {
      onClose(event);
    }
  };

  renderStaticPill() {
    const { children, text, className, ...restProps } = this.props;
    const content = children || text;

    return (
      <span className={classnames(className, styles.staticPill)} {...restProps}>
        <Text baseline={false} raw>
          {content}
        </Text>
      </span>
    );
  }

  renderInteractivePill() {
    const {
      children,
      text,
      onClose,
      buttonType = 'button',
      className,
      ...restProps
    } = this.props;
    const content = children || text;

    return (
      <span
        className={classnames(className, styles.interactivePill)}
        {...restProps}
      >
        <Text baseline={false} raw>
          {content}
        </Text>
        <button
          type={buttonType}
          className={styles.removeButton}
          onClick={onClose}
        >
          <ScreenReaderOnly>Remove item {content}</ScreenReaderOnly>
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

    return onClose ? this.renderInteractivePill() : this.renderStaticPill();
  }
}
