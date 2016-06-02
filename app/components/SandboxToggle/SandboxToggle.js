import styles from './SandboxToggle.less';
import tick from './tick.svg';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function SandboxToggle({ toggleType, toggleProps, label }) {
  const { options, ...restProps } = toggleProps;
  const tickClass = classnames({
    [styles.tick]: true,
    [styles.checked]: restProps.checked
  });

  const renderer = () => {
    switch (toggleType) {
      case 'select':
        return (
          <label htmlFor="select" className={styles.label}>
            <select name="select" className={styles.select} { ...restProps}>
              {
                options.map(({ name, value }) => (
                  <option value={value} key={value}>{name}</option>
                ))
              }
            </select>
          </label>
        );

      case 'radio':
        return (
          <label className={styles.label}>
            <input className={styles.toggle} {...restProps} />
            <span className={styles.radio}>{label}</span>
          </label>
        );

      case 'range':
        return (
          <label className={styles.label}>
            <span className={styles.range}>{label}</span>
            <input {...restProps} />
          </label>
        );

      default:
        /* eslint-disable react/no-danger */
        return (
          <label className={styles.label}>
            <span className={tickClass} dangerouslySetInnerHTML={{ __html: tick }} />
            <input className={styles.toggle} {...restProps} />
            <span className={styles.text}>{label}</span>
          </label>
        );
        /* eslint-enable react/no-danger */
    }
  };

  return (
    <p className={styles.root}>
    {renderer()}
    </p>
  );
}

SandboxToggle.propTypes = {
  toggleType: PropTypes.oneOf(['checkbox', 'radio', 'select']).isRequired,
  toggleProps: PropTypes.object.isRequired,
  label: PropTypes.string
};
