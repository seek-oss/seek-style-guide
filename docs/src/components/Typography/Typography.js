import React from 'react';
import PropTypes from 'prop-types';
import {
  PageBlock,
  Card,
  Section,
  Paragraph,
  Text,
  TextLink,
  Strong,
  Positive,
  Critical,
  Secondary
} from 'seek-asia-style-guide/react';
import Demo from '../Demo/Demo';
import textDemoSpec from 'seek-asia-style-guide/react/Text/Text.demo';

const BackgroundContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <Section style={{ maxWidth: 720 }}>
      <DemoComponent {...componentProps} />
    </Section>
  </PageBlock>
);
BackgroundContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

const loremIpsum = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut convallis elit convallis, bibendum mauris et, lacinia mi.',
  'Pellentesque quis arcu dignissim nibh tempor placerat et et lorem.'
].join('\n');

const loremIpsumShort = `${loremIpsum.split(',')[0]}.`;

export default () => (
  <div>
    <PageBlock>
      <Section header>
        <Text screaming>Typography</Text>
      </Section>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text>Since typography forms the backbone of our design language, we have a suite of responsive typographical components to support semantic usage of our type hierarchy.</Text>
          </Paragraph>
          <Paragraph>
            <Text>The core typographical building block is the &ldquo;Text&rdquo; component, which renders a block-level span element with a single grid row below it, to leave room for descenders.</Text>
          </Paragraph>
          <Paragraph>
            <Text>It accepts a wide range of options, which can be seen below.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        ...textDemoSpec,
        title: null
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text>To better understand these options, let's step through them one by one.</Text>
          </Paragraph>
        </Section>
        <Section>
          <Text shouting>Standard Text</Text>
          <Paragraph>
            <Text>By default, when no options are provided, standard text is rendered.</Text>
          </Paragraph>
          <Paragraph>
            <Text>Standard text is 14px over 2 grid rows on desktop, and 18px over 3 grid rows on mobile.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          children: loremIpsum
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text shouting>Weight Variants</Text>
          <Paragraph>
            <Text>While all elements in our type hierarchy include a default weight, you can also override these with the provided weight variants.</Text>
          </Paragraph>
        </Section>
        <Section>
          <Text shouting>Strong Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity marked as strong with the &ldquo;strong&rdquo; property, which also causes the element to render a &ldquo;strong&rdquo; tag.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          strong: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text>In cases where only a portion of a text block should be marked as strong, a &ldquo;Strong&rdquo; component is provided.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          loud: true,
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is ', <Strong>strong.</Strong>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text shouting>Regular Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity set to regular weight with the &ldquo;regular&rdquo; property.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          screaming: true,
          regular: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text shouting>Light Text</Text>
          <Paragraph>
            <Text>Finally, any text element can be explicity set to light weight with the &ldquo;light&rdquo; property.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          screaming: true,
          light: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text shouting>Tone Variants</Text>
          <Paragraph>
            <Text>All text is rendered in our standard neutral shade of black by default, but sometimes text needs to be displayed with different tones.</Text>
          </Paragraph>
        </Section>
        <Section>
          <Text shouting>Positive Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity marked as positive with the &ldquo;positive&rdquo; property or the inline &ldquo;Positive&rdquo; component.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          positive: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          superstandard: true,
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is ', <Positive>positive.</Positive>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text shouting>Critical Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity marked as critical with the &ldquo;critical&rdquo; property or the inline &ldquo;Critical&rdquo; component.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          critical: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          loud: true,
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is ', <Critical>critical.</Critical>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text shouting>Secondary Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity marked as secondary with the &ldquo;secondary&rdquo; property or the inline &ldquo;Secondary&rdquo; component.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          secondary: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          loud: true,
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is ', <Secondary>secondary.</Secondary>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text shouting>Text Links</Text>
          <Paragraph>
            <Text>To create a standard text-based link, a &ldquo;TextLink&rdquo; component is provided.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          loud: true,
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is a ', <TextLink href="#">link</TextLink>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text shouting>Disabling Baseline</Text>
          <Paragraph>
            <Text>By default, all text is adjusted to sit correctly on baseline using <TextLink href="https://github.com/michaeltaranto/basekick">basekick</TextLink>.</Text>
          </Paragraph>
          <Paragraph>
            <Text>In some cases, when text needs to be vertically centred within a container, this isn&rsquo;t the desired behaviour. To deal with this, you can optionally disable the baseline adjustment.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          screaming: true,
          baseline: false,
          children: loremIpsumShort
        },
        options: []
      }}
    />
  </div>
);
