import React from 'react';
import PropTypes from 'prop-types';
import { PageBlock, AsidedLayout, Card, Section, Paragraph, Text, TextLink, Strong } from 'seek-style-guide/react';
import Demo from '../Demo/Demo';

const BackgroundContainer = ({ component: DemoComponent, componentProps }) => (
  <div style={{ backgroundColor: '#eeeeee', padding: 0.1 }}>
    <DemoComponent {...componentProps} />
  </div>
);
BackgroundContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

const MockContent = ({ text = 'Lorem ipsum' }) => (
  <div
    style={{
      background: 'blue',
      height: (17 * 9),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <Text
      hero
      strong
      baseline={false}
      style={{
        fontSize: 36,
        color: 'white'
      }}>
      {text}
    </Text>
  </div>
);
MockContent.propTypes = {
  text: PropTypes.string
};

const MockAside = () => (
  <Section style={{ background: 'cyan' }}>
    <MockContent text="Aside" />
  </Section>
);

const loremIpsum = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
].join('\n          ');

const LoremIpsumAside = () => (
  <Card transparent>
    <Section>
      <Text heading>Lorem ipsum</Text>
      <Text>{loremIpsum}</Text>
    </Section>
  </Card>
);

export default () => (
  <div>
    <PageBlock>
      <Section header>
        <Text hero>Page Layout</Text>
      </Section>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text superstandard>When creating a new page, figuring out how to get started can be quite a daunting task. To make this process as streamlined as possible, we provide a suite of composable layout components that can be combined in different ways to create our most common designs.</Text>
          </Paragraph>
          <Paragraph>
            <Text superstandard>As much as possible, we aim to reduce or eliminate the need to write custom styles for standard layouts. When needed, you can pass additional classes or inline styles as overrides, but this should ideally be the exception.</Text>
          </Paragraph>
        </Section>
        <Section>
          <Text heading>Header and Footer</Text>
          <Paragraph>
            <Text superstandard>The obvious starting point is to add the <TextLink to="/header">Header</TextLink> and <TextLink to="/footer">Footer</TextLink> components to your page, both of which are fairly self explanatory and documented separately.</Text>
          </Paragraph>
        </Section>
        <Section>
          <Text heading>Page Blocks</Text>
          <Paragraph>
            <Text superstandard>Page blocks serve as the canvas for most content in your application. They are designed to break the content up into one or more horizontal bands. When used for hero content at the top of a page, they'll usually also have background colours applied to them.</Text>
          </Paragraph>
          <Paragraph>
            <Text superstandard>Any full-width content placed inside a page block will remain centred on desktop screens without exceeding our maximum content width, while taking up the full width of the screen on smaller devices.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: PageBlock,
        block: true,
        initialProps: {
          style: { background: 'pink' },
          children: <MockContent />
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text heading>Sections</Text>
            <Text superstandard>
              Page blocks by themselves don't provide any inner padding. This may be desirable in some cases, but you'll usually want to provide some space above and below your content, as well as providing responsive gutters on either side.
            </Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: PageBlock,
        block: true,
        initialProps: {
          style: { background: 'pink' },
          children: (
            <Section style={{ background: 'cyan' }}>
              <MockContent />
            </Section>
          )
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text superstandard>
              Sections can also serve as containers for page header content via the <Strong>&lsquo;header&rsquo;</Strong> flag. This adds extra vertical space, ensuring content is sufficiently prioritised from everything around it.
            </Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: PageBlock,
        block: true,
        initialProps: {
          style: { background: 'pink' },
          children: (
            <Section header style={{ background: 'cyan' }}>
              <Text hero style={{ background: 'blue', color: 'white' }}>Lorem ipsum</Text>
            </Section>
          )
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text superstandard>
              If we take away the instructional background colours, you can see that we're starting to build up a very standard looking page. Not only that, we've achieved this without writing much code, and without writing a single line of CSS.
            </Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: PageBlock,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          children: (
            <Section header>
              <Text headline>Lorem ipsum</Text>
            </Section>
          )
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text heading>Cards</Text>
            <Text superstandard>
              Once we start to add a lot of content to the page, you'll find yourself wanting to break it up into visually distinct blocks of colour. Cards make this extremely simple by providing a white background with vertical space underneath.
            </Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: PageBlock,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          children: (
            <div>
              <Section header>
                <Text headline>Lorem ipsum</Text>
              </Section>
              <Card>
                <Section>
                  <Text heading>Lorem ipsum</Text>
                  <Text>{loremIpsum}</Text>
                </Section>
              </Card>
              <Card>
                <Section>
                  <Text heading>Lorem ipsum</Text>
                  <Text>{loremIpsum}</Text>
                </Section>
              </Card>
            </div>
          )
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text superstandard>
              If you'd like to remove the white background, but keep the same visual spacing, you can use the <Strong>&lsquo;transparent&rsquo;</Strong> flag.
            </Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: PageBlock,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          children: (
            <div>
              <Section header>
                <Text headline>Lorem ipsum</Text>
              </Section>
              <Card>
                <Section>
                  <Text heading>Lorem ipsum</Text>
                  <Text>{loremIpsum}</Text>
                </Section>
              </Card>
              <Card transparent>
                <Section>
                  <Text heading>Lorem ipsum</Text>
                  <Text>{loremIpsum}</Text>
                </Section>
              </Card>
            </div>
          )
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text heading>Card Groups</Text>
            <Text superstandard>
              When multiple cards are very closely related, they can be nested within a card group to ensure that this relationship is clearly communicated.
            </Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: PageBlock,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          children: (
            <div>
              <Section header>
                <Text headline>Lorem ipsum</Text>
              </Section>
              <Card group>
                <Card>
                  <Section>
                    <Text heading>Lorem ipsum</Text>
                    <Text>{loremIpsum}</Text>
                  </Section>
                </Card>
                <Card>
                  <Section>
                    <Text heading>Lorem ipsum</Text>
                    <Text>{loremIpsum}</Text>
                  </Section>
                </Card>
                <Card>
                  <Section>
                    <Text heading>Lorem ipsum</Text>
                    <Text>{loremIpsum}</Text>
                  </Section>
                </Card>
              </Card>
            </div>
          )
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text heading>Asided Layouts</Text>
            <Text superstandard>
              Even though we set a maximum content width on larger screens, it results in line lengths that extend beyond comfortable reading levels. This is where our asided layout component comes in, giving us the ability to quickly and easily place content side-by-side on large screens, while responsively collapsing down to a single column on small screens.
            </Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: PageBlock,
        block: true,
        initialProps: {
          style: { background: 'pink' },
          children: (
            <AsidedLayout
              size="33%"
              renderAside={MockAside}>
              <Section style={{ background: 'cyan' }}>
                <MockContent />
              </Section>
            </AsidedLayout>
          )
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text superstandard>
              By default, sidebar content is placed below the main content on smaller screens. If the sidebar content is providing valuable context that, when read linearly, needs to be placed before the main content, the <Strong>&lsquo;reverse&rsquo;</Strong> flag will flip the content order.
            </Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: PageBlock,
        block: true,
        initialProps: {
          style: { background: 'pink' },
          children: (
            <AsidedLayout
              size="33%"
              reverse
              renderAside={MockAside}>
              <Section style={{ background: 'cyan' }}>
                <MockContent />
              </Section>
            </AsidedLayout>
          )
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text superstandard>
              Putting it all together with real content, it starts to look much more like a real page.
            </Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: PageBlock,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          children: (
            <div>
              <Section header>
                <Text headline>Lorem ipsum</Text>
              </Section>
              <AsidedLayout
                size="33%"
                renderAside={LoremIpsumAside}>
                <Card>
                  <Section>
                    <Text heading>Lorem ipsum</Text>
                    <Text>{loremIpsum}</Text>
                  </Section>
                </Card>
                <Card>
                  <Section>
                    <Text heading>Lorem ipsum</Text>
                    <Text>{loremIpsum}</Text>
                  </Section>
                </Card>
                <Card>
                  <Section>
                    <Text heading>Lorem ipsum</Text>
                    <Text>{loremIpsum}</Text>
                  </Section>
                </Card>
              </AsidedLayout>
            </div>
          )
        },
        options: []
      }}
    />
  </div>
);
