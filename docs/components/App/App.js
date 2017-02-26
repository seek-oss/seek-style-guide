import React, { PropTypes } from 'react';
import { StyleGuideProvider, PageBlock, Section, Logo } from 'seek-style-guide/react';

export default function App({ children }) {
  return (
    <StyleGuideProvider fullScreen={true} title="SEEK Style Guide">
      <PageBlock>
        <Section>
          <Logo />
        </Section>
      </PageBlock>

      {children}
    </StyleGuideProvider>
  );
}

App.propTypes = {
  children: PropTypes.node
};
