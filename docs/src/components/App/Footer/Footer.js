import styles from './Footer.less';
import React from 'react';
import { PageBlock, Section } from 'seek-asia-style-guide/react';
import GithubIcon from './GithubIcon/GithubIcon';

export default function Footer() {
  return (
    <PageBlock>
      <Section>
        <div className={styles.root}>
          <a
            className={styles.link}
            href="https://github.com/seek-oss/seek-asia-style-guide"
            title="View project on Github">
            <GithubIcon svgClassName={styles.github} />
          </a>
        </div>
      </Section>
    </PageBlock>
  );
}
