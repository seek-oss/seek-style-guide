import styles from './SlideToggle.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TickIcon from '../TickIcon/TickIcon';
import classnames from 'classnames';

const LEFT = 'left';
const RIGHT = 'right';

export default class SlideToggle extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onToggle: PropTypes.func,
    position: PropTypes.oneOf([LEFT, RIGHT]),
    hideLabel: PropTypes.bool,
    children: PropTypes.node,
    checked: PropTypes.bool
  }

  static defaultProps = {
    position: RIGHT,
    hideLabel: false
  };

  handleChange = event => {
    const { onToggle } = this.props;
    if (onToggle) {
      onToggle(event.target.checked);
    }
  }

  renderLabel = () => {
    const { position, label } = this.props;
    return (
      <span
        className={classnames(
          styles.label,
          position === LEFT ? styles.labelLeft : styles.labelRight
        )}>{label}</span>
    );
  }

  render() {
    const { children, id, checked, position, label, hideLabel } = this.props;
    return (
      <FieldLabel htmlFor={id} className={styles.root}>
        {(hideLabel !== true && position === LEFT && !children) && this.renderLabel()}
        <div className={styles.switch}>
          <input
            type="checkbox"
            id={id}
            aria-label={label}
            className={styles.input}
            checked={checked}
            onChange={this.handleChange}
          />
          <div className={styles.slider}>
            <div className={styles.slideButton}>
              <TickIcon
                className={styles.icon}
                svgClassName={styles.svg}
              />
            </div>
          </div>
        </div>
        {(hideLabel !== true && position === RIGHT && !children) && this.renderLabel()}
      </label>
    );
  }
}
