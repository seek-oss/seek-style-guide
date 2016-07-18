import styles from './Footer.less';

import React from 'react';
import GridContainer from 'GridContainer/GridContainer';
import GithubIcon from './GithubIcon/GithubIcon';

export default function Footer() {
  return (
    <GridContainer>
      <div className={styles.root}>
        <a
          className={styles.link}
          href="https://github.com/SEEK-Jobs/seek-style-guide"
          title="View project on Github">
          <GithubIcon svgClassName={styles.github} />
        </a>
      </div>
    </GridContainer>
  );
}
