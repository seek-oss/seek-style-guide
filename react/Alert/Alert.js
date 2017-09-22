import styles from './Alert.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Text from '../Text/Text';
import TickCircleIcon from '../TickCircleIcon/TickCircleIcon';
import InfoIcon from '../InfoIcon/InfoIcon';
import ErrorIcon from '../ErrorIcon/ErrorIcon';
import HelpIcon from '../HelpIcon/HelpIcon';

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
  [TYPE.CRITICAL]: ErrorIcon,
  [TYPE.HELP]: HelpIcon
};

export default class Alert extends Component {

  static displayName = 'Alert';

  static propTypes = {
    type: PropTypes.oneOf([TYPE.POSITIVE, TYPE.INFO, TYPE.CRITICAL, TYPE.HELP]),
    level: PropTypes.oneOf([LEVEL.PRIMARY, LEVEL.SECONDARY, LEVEL.TERTIARY]),
    message: PropTypes.string.isRequired
  };

  static defaultProps = {
    type: TYPE.INFO,
    level: LEVEL.SECONDARY
  };

  render() {
    const { message, type, level } = this.props;
    const Icon = ICONS[type];

    return (
      <div className={classnames(styles.root, styles[type], styles[level])}>
        <Icon className={styles.icon} />
        <div className={styles.text}>
          <Text raw baseline={false}>{message}</Text>
        </div>
      </div>
    );
  }

}
