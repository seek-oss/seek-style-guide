import React, { Component, PropTypes } from 'react';
import styles from './Checkbox.less';
import classnames from 'classnames';

export default class Checkbox extends Component {
  static displayName = 'Checkbox';

  static propTypes = {
    label: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string, // for now
    inputProps: PropTypes.shape({
      onChange: PropTypes.func,
      checked: PropTypes.bool
    })
  }

  render() {
    const { inputProps: { onChange, checked }, label, className } = this.props;

    const classNames = classnames({
      [styles.root]: true,
      [className]: className
    });

    return (
      <div className={classNames}>
        <label className={`${styles.control}`}>{label}
          <input className={`${styles.input}`} type="checkbox" checked={checked} onChange={onChange} />
          <div className={styles.controlIndicator} />
        </label>
      </div>
    );
  }
}
