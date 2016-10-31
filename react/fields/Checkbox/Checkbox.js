import React, { Component, PropTypes } from 'react';
import styles from './Checkbox.less';
import classnames from 'classnames';

export default class Checkbox extends Component {
  static displayName = 'Checkbox';

  static propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    ariaLabel: PropTypes.string, // for now
    inputProps: PropTypes.shape({
      onChange: PropTypes.func,
      checked: PropTypes.bool
    })
  }

  render() {
    const { inputProps: { onChange, checked }, label, className } = this.props;

    const rootClassNames = classnames({
      [styles.root]: true,
      [styles.checked]: checked,
      [className]: className
    });

    return (
      <div className={rootClassNames}>
        <input className={styles.input} id="check1" type="checkbox" onChange={onChange} checked={checked} />
        <label className={styles.label} htmlFor="check1">
          <span className={styles.tickBox} />
          <span>Checkbox</span>
        </label>
      </div>
    );
  }
}
