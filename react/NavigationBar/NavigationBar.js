import React from 'react';
import MenuIcon from 'seek-asia-style-guide/react/LeftArrowIcon/LeftArrowIcon';
import styles from './NavigationBar.less';
import PropTypes from 'prop-types';

const NavigationBar = ({ handleClick }) => (
  <header className={styles.root} role="banner" aria-label="Primary navigation">
    <section className={styles.content}>
      <div className={styles.container}>
        <button className={styles.toggle} onClick={handleClick}>
          <MenuIcon />
        </button>
      </div>
    </section>
  </header>
);

NavigationBar.propTypes = {
  handleClick: PropTypes.func
};

export default NavigationBar;
