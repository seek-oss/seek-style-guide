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
    help: PropTypes.string,
    helpProps: PropTypes.object,
    valid: PropTypes.bool,
    message: PropTypes.oneOfType([
      PropTypes.oneOf([false]),
      PropTypes.node
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

      return (
        <Text
          small
          {...restMessageProps}
          critical={(valid === false && !secondary) || critical}
          positive={(valid === true && !secondary) || positive}
          secondary={typeof valid === 'undefined' || secondary}>
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
