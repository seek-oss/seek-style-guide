import styles from './SlideToggle.less';
import React, { Component, PropTypes } from 'react';
import TickIcon from '../TickIcon/TickIcon';
import classnames from 'classnames';

const LEFT = 'left';
const RIGHT = 'right';

export default class SlideToggle extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    label: PropTypes.shape({
      text: PropTypes.string.isRequired,
      position: PropTypes.oneOf([LEFT, RIGHT]),
      hidden: PropTypes.bool
    }),
    children: PropTypes.element,
    checked: PropTypes.bool
  }

  static defaultProps: {
    label: {
      position: 'left',
      hidden: false
    }
  };

  handleChange = event => {
    const { onToggle } = this.props;
    onToggle(event.target.checked);
  }

  renderLabel = () => {
    const { label } = this.props;
    return (
      <span
        className={classnames(
          styles.label,
          label.position === LEFT ? styles.labelLeft : styles.labelRight
        )}>{label.text}</span>
    );
  }

  render() {
    const { children, id, checked, label } = this.props;
    return (
      <label htmlFor={id} className={styles.root}>
        {(label.hidden !== true && label.position === LEFT && !children) && this.renderLabel()}
        {children}
        <div className={styles.switch}>
          <input
            type="checkbox"
            id={id}
            aria-label={label.text}
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
        {(label.hidden !== true && label.position === RIGHT && !children) && this.renderLabel()}
      </label>
    );
  }
}
