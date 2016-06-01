import styles from './HeroText.less';

import React, { PropTypes } from 'react';

export default function HeroText({ children }) {
  return (
    <div className={styles.root}>
      { children }
    </div>
  );
}

HeroText.propTypes = {
  children: PropTypes.node
};
