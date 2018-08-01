// @flow
import styles from './FieldMessage.less';

import React, { Component } from 'react';

import classnames from 'classnames';

import ErrorIcon from '../ErrorIcon/ErrorIcon';
import TickCircleIcon from '../TickCircleIcon/TickCircleIcon';

import Text from '../Text/Text';
import { TONE } from '../private/tone';

type Props = {
  id: string,
  invalid?: boolean,
  help?: string,
  helpProps?: Object,
  valid?: boolean,
  message: false | Node | string,
  messageProps: {
    critical?: boolean,
    positive?: boolean,
    secondary?: boolean
  },
  tone?: 'positive' | 'critical' | 'neutral'
};

export default class FieldMessage extends Component<Props> {
  static displayName = 'FieldMessage';

  static defaultProps = {
    message: '',
    messageProps: {
      critical: false,
      positive: false,
      secondary: false
    }
  };

  renderMessage = () => {
    const { id, message, tone, valid } = this.props;

    if (message) {
      const { critical, positive, secondary, ...restMessageProps } = this.props.messageProps;

      const toneDefined = typeof tone !== 'undefined';
      const showCritical = toneDefined ? tone === TONE.CRITICAL : valid === false;
      const showPositive = toneDefined ? tone === TONE.POSITIVE : valid === true;
      const showSecondary = tone === TONE.NEUTRAL || typeof valid === 'undefined';

      return (
        <Text
          id={id}
          small
          {...restMessageProps}
          critical={(showCritical && !secondary) || critical}
          positive={(showPositive && !secondary) || positive}
          secondary={showSecondary || secondary}
          tabIndex='-1'>
          {this.renderMessageIcon()}
          {message}
        </Text>
      );
    }

    return null;
  }

  renderMessageIcon = () => {
    const { tone, valid } = this.props;
    const toneDefined = typeof tone !== 'undefined';
    const showErrorIcon = toneDefined ? tone === TONE.CRITICAL : valid === false;
    const showTickIcon = toneDefined ? tone === TONE.POSITIVE : valid === true;

    if (showErrorIcon) {
      return (
        <ErrorIcon
          filled={true}
          className={styles.messageIcon}
          svgClassName={styles.messageIconSvg}
        />
      );
    }

    if (showTickIcon) {
      return (
        <TickCircleIcon
          filled={true}
          className={styles.messageIcon}
          svgClassName={styles.messageIconSvg}
        />
      );
    }

    return null;
  }

  render() {
    const { invalid, help, helpProps, message, valid, tone } = this.props;

    if (invalid || help || helpProps) {
      throw new Error('WARNING: "invalid", "help", and "helpProps" have been deprecated in favour of "valid" and "message" props');
    }

    if (typeof valid !== 'undefined' && typeof tone === 'undefined') {
      console.error('Warning: "valid" has been deprecated as a method to display positive / critical text. Use "tone" instead');
    }

    const classNames = classnames({
      [styles.root]: true,
      [styles.noMarginBottom]: message || message === false
    });

    return (
      <div className={classNames}>
        {this.renderMessage()}
      </div>
    );
  }
}
