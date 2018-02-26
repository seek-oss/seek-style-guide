import React from 'react';
import { PageBlock, Section, Columns, Text } from 'seek-style-guide/react';

export default () => (
  <PageBlock>
    <Section header>
      <Text hero>A principled design process</Text>
    </Section>

    <Section>
      <Text>SEEK have developed 10 principles that describe the fundamental goals the design team consider when applying their minds to new design challenges or refining existing work. Their purpose is to enable the creation of content that will assist our users to complete tasks easily and hopefully enjoy the experience.</Text>
    </Section>

    <Columns>

      <div>
        <Section>
          <Text subheading>Design with empathy</Text>
          <Text>Understand our customers and end users better than they understand themselves.</Text>
        </Section>

        <Section>
          <Text subheading>A Seek interaction is transparent, honest and trustworthy</Text>
          <Text>A user experience at Seek should be true to the brand & true to how people want to be treated. “If we want users to like our software, we should design it to behave like a likeable person.” – Alan Cooper</Text>
        </Section>

        <Section>
          <Text subheading>Use persuasive design to achieve business goals</Text>
          <Text>It is not enough that our design is usable, it should be used in a way that encourages users towards the goals of SEEK. A registered user action is more valuable than an anonymous one, a searchable profile is more useful than a hidden one.</Text>
        </Section>

        <Section>
          <Text subheading>Content is king</Text>
          <Text>A person’s focus should be on their content, not on the UI. Help people work without interference.</Text>
        </Section>
      </div>

      <div>
        <Section>
          <Text subheading>Simplicity is powerful</Text>
          <Text>A minimalist form and function keeps users focused on their goals without distraction. It improves on-screen responsiveness as well as being suited to small-screen implementations.</Text>
        </Section>

        <Section>
          <Text subheading>Data informs design</Text>
          <Text>“One accurate measurement is worth more than a thousand expert opinions.” – Grace Hopper</Text>
        </Section>

        <Section>
          <Text subheading>Consistency matters</Text>
          <Text>Appearance follows behaviour (Form follows function). Designed elements should look like they behave—someone should be able to predict how an interface element will behave merely by looking at it. Embrace consistency, but not homogeneity. If something looks the same it should always act the same.</Text>
        </Section>

        <Section>
          <Text subheading>Accessible design is good design</Text>
          <Text>In principle Seek design should be usable on all devices by all of the people in all situations. Design is simple, touch friendly and clear and aims for AA accessibility.</Text>
        </Section>
      </div>

      <div>
        <Section>
          <Text subheading>Make it mine</Text>
          <Text>The jobseeking experience is highly personal one that takes place over extended periods of time. The experience should align to the way that users conduct their jobseeking, allowing them to continue where they left off.</Text>
        </Section>

        <Section>
          <Text subheading>Don’t make users think</Text>
          <Text>Observation shows that users do not read instructions. Interactions should be task focused, eliminating decision points and generally use one clear call to action.</Text>
        </Section>
      </div>
    </Columns>
  </PageBlock>
);
