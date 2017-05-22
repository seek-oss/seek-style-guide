import styles from './SlideToggle.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TickIcon from '../TickIcon/TickIcon';
import Text from '../Text/Text';
import classnames from 'classnames';

const LEFT = 'left';
const RIGHT = 'right';

export default class SlideToggle extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    position: PropTypes.oneOf([LEFT, RIGHT]),
    hideLabel: PropTypes.bool,
    children: PropTypes.node,
    checked: PropTypes.bool
  }

  static defaultProps = {
    position: RIGHT,
    hideLabel: false
  };

  renderLabel = currentPosition => {
    const { label, hideLabel, children, position } = this.props;
    return hideLabel !== true && position === currentPosition && !children && (
      <Text
        raw
        className={classnames(
          styles.label,
          position === LEFT ? styles.labelLeft : styles.labelRight
        )}>
        {label}
      </Text>
    );
  }

  render() {
    const { id, checked, label, position, onChange } = this.props;

    const inputStyles = classnames({
      [styles.input]: true,
      [styles.inputLeft]: position === LEFT
    });

    return (
      <label htmlFor={id} className={styles.root}>
        <div className={styles.switch}>
          <input
            ref={this.storeInputRef}
            type="checkbox"
            id={id}
            aria-label={label}
            className={inputStyles}
            checked={checked}
            onChange={onChange}
          />
          {this.renderLabel(LEFT)}
          <div className={styles.slider}>
            <div className={styles.slideButton}>
              <TickIcon
                className={styles.icon}
                svgClassName={styles.svg}
              />
            </div>
          </div>
          {this.renderLabel(RIGHT)}
        </div>
      </label>
    );
  }
}
