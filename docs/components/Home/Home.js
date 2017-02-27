import React from 'react';
import { PageBlock, Section, Text, Button } from 'seek-style-guide/react';
import buttonDemoSpec from 'seek-style-guide/react/Button/Button.demo';
import Demo from 'Demo/Demo';

export default function Home() {
  return (
    <div>

      <PageBlock>
        <Section header>
          <Text hero>Hello world!</Text>
        </Section>

        <Section group>
          <Section>
            <Text heading>Demo</Text>
          </Section>
          <Section>
            <Demo component={Button} spec={buttonDemoSpec} />
          </Section>
        </Section>
      </PageBlock>

    </div>
  );
}
