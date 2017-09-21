import styles from './Alert.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from '../Text/Text';
import InfoIcon from '../InfoIcon/InfoIcon';

export default class Alert extends Component {

  static displayName = 'Alert';

  static propTypes = {
    message: PropTypes.string.isRequired
  };

  static defaultProps = {};

  render() {
    const { message } = this.props;

    return (
      <div className={styles.root}>
        <InfoIcon className={styles.icon} svgClassName={styles.iconSvg} />
        <Text className={styles.text} raw baseline={false}>
          {message}
        </Text>
      </div>
    );
  }

}
