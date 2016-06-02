import styles from './IconSample.less';

import React, { PropTypes } from 'react';

export default function IconSample({ Icon, name, ...props }) {
  return (
    <div className={styles.root}>
      <Icon className={styles.icon} svgClassName={styles.svg} { ...props } />
      <p className={styles.name}>{ name }</p>
    </div>
  );
}

IconSample.propTypes = {
  Icon: PropTypes.func.isRequired,
  name: PropTypes.string
};
