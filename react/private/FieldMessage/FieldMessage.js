import styles from './FieldMessage.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import ErrorIcon from '../../ErrorIcon/ErrorIcon';
import TickCircleIcon from '../../TickCircleIcon/TickCircleIcon';

import Text from '../../Text/Text';

export default class FieldMessage extends Component {

  static displayName = 'FieldMessage';

  static propTypes = {
    invalid: PropTypes.bool,
    help: React.PropTypes.string,
    helpProps: PropTypes.object,
    valid: PropTypes.bool,
    message: React.PropTypes.oneOfType([
      React.PropTypes.oneOf([false]),
      React.PropTypes.node
    ]),
    messageProps: PropTypes.object
  };

  static defaultProps = {
    message: '',
    messageProps: {
      critical: false,
      positive: false,
      secondary: false
    }
  };

  constructor() {
    super();

    this.renderMessage = this.renderMessage.bind(this);
    this.renderMessageIcon = this.renderMessageIcon.bind(this);
  }

  renderMessage() {
    const { message, valid } = this.props;

    if (message) {
      const { critical, positive, secondary, ...restMessageProps } = this.props.messageProps;
      const isCritical = (valid === false && !secondary) || critical;
      const isPositive = (valid === true && !secondary) || positive;
      const isSecondary = typeof valid === 'undefined' || secondary;

      return (
        <Text
          {...restMessageProps}
          critical={isCritical}
          positive={isPositive}
          secondary={isSecondary}
          {...(isCritical && !restMessageProps.role) ? { role: 'alert' } : {}}
          {...(isPositive && !restMessageProps['aria-live']) ? { 'aria-live': 'polite' } : {}}
          {...(isSecondary && !restMessageProps.role) ? { 'role': 'status' } : {}}>
          {this.renderMessageIcon()}
          {message}
        </Text>
      );
    }

    return null;
  }

  renderMessageIcon() {
    const { valid } = this.props;

    if (valid === false) {
      return (
        <ErrorIcon
          filled={true}
          className={styles.messageIcon}
          svgClassName={styles.messageIconSvg}
        />
      );
    }

    if (valid === true) {
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
    const { invalid, help, helpProps, message } = this.props;

    if (invalid || help || helpProps) {
      throw new Error('WARNING: "invalid", "help", and "helpProps" have been deprecated in favour of "valid" and "message" props');
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
