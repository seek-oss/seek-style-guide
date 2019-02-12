import styles from './ToggleContainer.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ChevronIcon from '../../ChevronIcon/ChevronIcon';

export default function ToggleContainer({
  children,
  secondary,
  label,
  name,
  'data-automation': dataAutomation
}) {
  return (
    <li className={classnames({ [styles.secondary]: secondary })}>
      <input
        id={name}
        className={styles.toggle}
        type="checkbox"
        data-automation={dataAutomation}
      />
      <label
        className={`${styles.toggleLink} ${styles.toggleLabel}`}
        htmlFor={name}
      >
        {label}
        <ChevronIcon direction="down" className={styles.chevron} small />
      </label>
      <ul className={styles.toggleContainer}>{children}</ul>
    </li>
  );
}

ToggleContainer.propTypes = {
  secondary: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  'data-automation': PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

ToggleContainer.defaultProps = {
  secondary: false
};
