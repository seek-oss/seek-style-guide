import styles from './App.less';
import React, { PropTypes } from 'react';
import { StyleGuideProvider, PageBlock, Section } from 'seek-style-guide/react';
import Logo from './Logo/Logo';

export default function App({ children }) {
  return (
    <StyleGuideProvider fullScreen={true} title="SEEK Style Guide">
      <PageBlock className={styles.headerBlock}>
        <Section>
          <Logo svgClassName={styles.logo} />
        </Section>
      </PageBlock>

      {children}
    </StyleGuideProvider>
  );
}

App.propTypes = {
  children: PropTypes.node
};
