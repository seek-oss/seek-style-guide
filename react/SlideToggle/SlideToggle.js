import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TickIcon from '../TickIcon/TickIcon';
import classnames from 'classnames';
import styles from './SlideToggle.less';

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
    checked: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    position: RIGHT,
    hideLabel: false
  };

  renderLabel = currentPosition => {
    const { label, hideLabel, children, position } = this.props;
    const labelStyle = classnames(
      styles.labelText,
      position === LEFT ? styles.labelLeft : styles.labelRight
    );
    return (
      hideLabel !== true &&
      position === currentPosition &&
      !children && <span className={labelStyle}>{label}</span>
    );
  };

  render() {
    const { id, checked, label, position, onChange, className } = this.props;

    const inputStyles = classnames({
      [styles.input]: true,
      [styles.inputLeft]: position === LEFT
    });

    return (
      <div className={classnames(styles.root, className)}>
        <input
          id={id}
          ref={this.storeInputRef}
          type="checkbox"
          aria-label={label}
          className={inputStyles}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={id} className={styles.switch}>
          {this.renderLabel(LEFT)}
          <div className={styles.slideContainer}>
            <div className={styles.slider} />
            <TickIcon
              className={styles.slideButton}
              svgClassName={styles.svg}
            />
          </div>
          {this.renderLabel(RIGHT)}
        </label>
      </div>
    );
  }
}
