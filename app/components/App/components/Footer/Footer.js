import styles from './Footer.less';
import github from './github.svg';

import React from 'react';
import GridContainer from 'GridContainer/GridContainer';

export default function Footer() {
  const markup = github.replace('<svg ', `<svg class="${styles.github}" `);

  return (
    <GridContainer>
      <div className={styles.root}>
        <a
          className={styles.link}
          href="https://github.com/SEEK-Jobs/seek-style-guide"
          title="View project on Github"
          dangerouslySetInnerHTML={{ __html: markup }} // eslint-disable-line react/no-danger
        />
      </div>
    </GridContainer>
  );
}
