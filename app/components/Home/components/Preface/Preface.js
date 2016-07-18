import React from 'react';

import HeroText from 'HeroText/HeroText';
import SubheadingText from 'SubheadingText/SubheadingText';
import Section from 'Section/Section';
import GridContainer from 'GridContainer/GridContainer';
import StandardText from 'StandardText/StandardText';
import Columns from 'Columns/Columns';

export default function Preface() {
  return (
    <GridContainer>
      <Section>
        <HeroText>A principled design process</HeroText>
        <SubheadingText>
          SEEK have developed 10 principles that describe the fundamental goals the design team consider when applying their minds to new design challenges or refining existing work. Their purpose is to enable the creation of content that will assist our users to complete tasks easily and hopefully enjoy the experience.
        </SubheadingText>

        <Columns>
          <div>
            <StandardText>
              <h2>Design with empathy</h2>
              <p>Understand our customers and end users better than they understand themselves</p>
            </StandardText>
            <StandardText>
              <h2>A Seek interaction is transparent, honest and trustworthy</h2>
              <p>A user experience at Seek should be true to the brand & true to how people want to be treated. &ldquo;If we want users to like our software, we should design it to behave like a likeable person.&rdquo; &ndash; Alan Cooper</p>
            </StandardText>
            <StandardText>
              <h2>Use persuasive design to achieve business goals</h2>
              <p>It is not enough that our design is usable, it should be used in a way that encourages users towards the goals of SEEK. A registered user action is more valuable than an anonymous one, a searchable profile is more useful than a hidden one.</p>
            </StandardText>
            <StandardText>
              <h2>Content is king</h2>
              <p>A person&rsquo;s focus should be on their content, not on the UI. Help people work without interference.</p>
            </StandardText>
          </div>
          <div>
            <StandardText>
              <h2>Simplicity is powerful</h2>
              <p>A minimalist form and function keeps users focused on their goals without distraction. It improves on-screen responsiveness as well as being suited to small-screen implementations.</p>
            </StandardText>
            <StandardText>
              <h2>Data informs design</h2>
              <p>&ldquo;One accurate measurement is worth more than a thousand expert opinions.&rdquo; &ndash; Grace Hopper</p>
            </StandardText>
            <StandardText>
              <h2>Consistency matters</h2>
              <p>Appearance follows behaviour (Form follows function). Designed elements should look like they behave&mdash;someone should be able to predict how an interface element will behave merely by looking at it.</p>
              <p>Embrace consistency, but not homogeneity. If something looks the same it should always act the same</p>
            </StandardText>
            <StandardText>
              <h2>Accessibile design is good design</h2>
              <p>In principle Seek design should be usable on all devices by all of the people in all situations. Design is simple, touch friendly and clear and aims for AA accessibility</p>
            </StandardText>
          </div>
          <div>
            <StandardText>
              <h2>Make it mine</h2>
              <p>The jobseeking experience is highly personal one that takes place over extended periods of time. The experience should align to the way that users conduct their jobseeking, allowing them to continue where they left off.</p>
            </StandardText>
            <StandardText>
              <h2>Don&rsquo;t make users think</h2>
              <p>Observation shows that users do not read instructions. Interactions should be task focused, eliminating decision points and generally use one clear call to action.</p>
            </StandardText>
          </div>
        </Columns>
      </Section>
    </GridContainer>
  );
}
