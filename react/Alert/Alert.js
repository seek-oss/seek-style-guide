import styles from './Alert.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Text from '../Text/Text';
import TickCircleIcon from '../TickCircleIcon/TickCircleIcon';
import InfoIcon from '../InfoIcon/InfoIcon';
import CriticalIcon from '../CriticalIcon/CriticalIcon';
import HelpIcon from '../HelpIcon/HelpIcon';
import CrossIcon from '../CrossIcon/CrossIcon';

export const TYPE = {
  POSITIVE: 'positive',
  INFO: 'info',
  CRITICAL: 'critical',
  HELP: 'help'
};

export const LEVEL = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary'
};

const ICONS = {
  [TYPE.POSITIVE]: TickCircleIcon,
  [TYPE.INFO]: InfoIcon,
  [TYPE.CRITICAL]: CriticalIcon,
  [TYPE.HELP]: HelpIcon
};

export default class Alert extends Component {

  static displayName = 'Alert';

  static propTypes = {
    type: PropTypes.oneOf([TYPE.POSITIVE, TYPE.INFO, TYPE.CRITICAL, TYPE.HELP]),
    level: PropTypes.oneOf([LEVEL.PRIMARY, LEVEL.SECONDARY, LEVEL.TERTIARY]),
    message: PropTypes.string.isRequired,
    hideIcon: PropTypes.bool,
    showCloseButton: PropTypes.bool,
    onClose: PropTypes.func
  };

  static defaultProps = {
    type: TYPE.INFO,
    level: LEVEL.SECONDARY,
    hideIcon: false,
    showCloseButton: false
  };

  handleClose = event => this.props.onClose(event);

  render() {
    const { message, type, level, hideIcon, showCloseButton } = this.props;

    const rootClasses = classnames({
      [styles.root]: true,
      [styles[type]]: true,
      [styles[level]]: true,
      [styles.hideIcon]: hideIcon,
      [styles.showCloseButton]: showCloseButton
    });

    const Icon = ICONS[type];

    return (
      <div className={rootClasses}>
        {!hideIcon && <Icon className={styles.icon} />}
        <div className={styles.text}>
          <Text raw baseline={false}>{message}</Text>
        </div>
        {showCloseButton && (
          <button className={styles.close} onClick={this.handleClose}>
            <CrossIcon />
          </button>
        )}
      </div>
    );
  }

}
