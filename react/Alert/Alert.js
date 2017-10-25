import styles from './Alert.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Section from '../Section/Section';
import Text from '../Text/Text';
import TickCircleIcon from '../TickCircleIcon/TickCircleIcon';
import InfoIcon from '../InfoIcon/InfoIcon';
import CriticalIcon from '../CriticalIcon/CriticalIcon';
import HelpIcon from '../HelpIcon/HelpIcon';
import CrossIcon from '../CrossIcon/CrossIcon';

import { TYPE, LEVEL } from '../Section/Section';

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
    pullout: PropTypes.bool,
    hideIcon: PropTypes.bool,
    showCloseButton: PropTypes.bool,
    onClose: PropTypes.func
  };

  static defaultProps = {
    type: TYPE.INFO,
    level: LEVEL.TERTIARY,
    hideIcon: false,
    showCloseButton: false,
    pullout: false
  };

  handleClose = event => this.props.onClose(event);

  renderContents = () => {
    const { type, message, hideIcon, showCloseButton } = this.props;

    const Icon = ICONS[type];

    return (
      <div className={styles.alert}>
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

  render() {
    const { hideIcon, showCloseButton, type, level, pullout } = this.props;

    const isTertiary = level === LEVEL.TERTIARY;

    const rootClasses = classnames({
      [styles.root]: true,
      [styles.hideIcon]: hideIcon,
      [styles.showCloseButton]: showCloseButton,
      [styles[type]]: isTertiary
    });

    return isTertiary ? (
      <div className={rootClasses}>
        {this.renderContents()}
      </div>
    ) : (
      <Section
        type={type}
        level={level}
        pullout={pullout}
        className={rootClasses}>
        {this.renderContents()}
      </Section>
    );
  }
}
