import React from 'react';
import LeftArrowIcon from 'seek-asia-style-guide/react/LeftArrowIcon/LeftArrowIcon';
import styles from './NavigationBar.less';
import PropTypes from 'prop-types';

const NavigationBar = ({ handleClick }) => (
  <header className={styles.root} role="banner" aria-label="Primary navigation">
    <section>
      <div className={styles.container}>
        <button className={styles.toggle} onClick={handleClick}>
          <LeftArrowIcon />
        </button>
      </div>
    </section>
  </header>
);

NavigationBar.propTypes = {
  handleClick: PropTypes.func
};

export default NavigationBar;
