import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import styles from './header.less';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header
        className={styles.root}
        role="banner"
        aria-label="Primary navigation">
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.bannerWrapper}>
              <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                  <a className={styles.logoLink} href="/">
                    <Logo svgClassName={styles.logoSvg} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
