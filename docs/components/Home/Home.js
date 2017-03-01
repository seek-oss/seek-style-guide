import React from 'react';
import { PageBlock, Section, Text } from 'seek-style-guide/react';
import Demo from 'Demo/Demo';
import textDemoSpec from 'seek-style-guide/react/Text/Text.demo';
import buttonDemoSpec from 'seek-style-guide/react/Button/Button.demo';
import textFieldDemoSpec from 'seek-style-guide/react/fields/TextField/TextField.demo';

export default function Home() {
  return (
    <div>

      <PageBlock>
        <Section header>
          <Text hero>Hello world!</Text>
        </Section>
      </PageBlock>

      <Demo spec={textDemoSpec} />
      <Demo spec={buttonDemoSpec} />
      <Demo spec={textFieldDemoSpec} />

    </div>
  );
}
