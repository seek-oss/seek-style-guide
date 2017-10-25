import React from 'react';
import MenuIcon from 'seek-asia-style-guide/react/HamburgerIcon/HamburgerIcon';
import styles from './NavigationBar.less'

const NavigationBar = ({handleClick}) => (
    <header className={styles.root} role="banner" aria-label="Primary navigation">
        <section className={styles.content}>
            <div className={styles.container}>
                <button className={styles.toggle}
                    onClick={handleClick}>
                    <MenuIcon />
                </button>
            </div>
        </section>
    </header>
)

export default NavigationBar;