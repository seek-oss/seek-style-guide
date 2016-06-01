import styles from './Typography.less';

import React from 'react';

import GridContainer from 'GridContainer/GridContainer';
import Columns from 'Columns/Columns';
import StandardText from 'StandardText/StandardText';
import Section from 'Section/Section';
import TypeSample from 'TypeSample/TypeSample';
import HeroText from 'HeroText/HeroText';
import SubheadingText from 'SubheadingText/SubheadingText';

const renderDemo = () => (
  <div className={styles.demo}>
    <GridContainer>
      <TypeSample mixin="heroText" description="Hero text" />
      <TypeSample mixin="headlineText" description="Headline text" />
      <TypeSample mixin="headingText" description="Heading text" />
      <TypeSample mixin="subheadingText" description="Subheading text" />
      <TypeSample mixin="standardText" description="Standard text" />
      <TypeSample mixin="smallText" description="Small text" />
    </GridContainer>
  </div>
);

const renderIntro = () => (
  <GridContainer>
    <HeroText>Typography</HeroText>
    <SubheadingText>All typographic application needs to be functional. Whether it be through size, colour or weight, it is important that any variation in typographic application, is logically derived from a necessity to improve the clarity of the content, and heighten the clarity of communication to the reader. Typography should be used functionally, not for ornament.</SubheadingText>
  </GridContainer>
);

const renderContent = () => (
  <GridContainer>
    <Columns>
      {() => [
        <div>
          <StandardText>
            <h2>Typeface</h2>
            <p>The typeface that is used accross all digital mediums at SEEK is Helvetica Neue and Arial. The former is used on the desktop site for Apple Computers, and both the iPhone and iPad apps. The later is used on the desktop site for PCs. Helvetica Neue is the prefered typeface.</p>
            <p>Arial is only to be used as a de facto stand in when Helvetica Neue is unavailable.</p>
          </StandardText>

          <StandardText>
            <h2>Font usage</h2>
            <p>Within that typeface of Helvetica Neue, three font weights are recommended 45 Light, 55 Roman and 75 Bold. Do not use Oblique or Italic fonts to designate hierarchy.</p>
          </StandardText>

          <StandardText>
            <h2>Leading</h2>
            <p>Good leading can carry the eye optically from one line to the next, giving it confidence and stability, and enabling it to absorb and easily remember what has been read.</p>
            <p>Lines that are too narrowly set impair reading speed because the upper and lower line are both taken in by the eye at the same time. Lines that are too widely spaced impair reading because the reader has trouble in linking up with the next line.</p>
          </StandardText>
        </div>,

        <div>
          <StandardText>
            <h2>Line length</h2>
            <p>Line Length should be between 40 and 80 characters, no more and no less. Lines that are too short tire the eye, from the constant pacing back and forth to a new line. Lines that are too long impair the reader from finding the next line.</p>
          </StandardText>

          <StandardText>
            <h2>Paragraph alignment</h2>
            <p>Paragraphs should always be set ragged right. If centering is required ensure copy does not exceed four lines. Never set justified.</p>
          </StandardText>

          <StandardText>
            <h2>Avoiding runts</h2>
            <p>A single word, or the end of a hyphenated word, should never be left alone as the last line of a paragraph. This is refered to as a runt. Ensure at least two words are on the last line of every paragraph.</p>
          </StandardText>

          <StandardText>
            <h2>Headings & body copy</h2>
            <p>Roman weight should always be used for body content and headings when a hierachical distinction has been made with colour or type size. Typographic distinction through colour, size, and weight should be used functinally. Reserve Bold for headings where a sub-heading is set in Roman. Never use Bold for body content.</p>
          </StandardText>
        </div>,

        <div>
          <StandardText>
            <h2>Type size</h2>
            <p>When using a variety of type sizes ensure the difference between them is clear and recognizable.</p>
            <p>Below the 15 point face is immediately distinguisahble from the 10 point face, whereas the difference in size between the 11 point face and the 10 point face is ambiguous, and therefore equivocal.</p>
          </StandardText>

          <StandardText>
            <h2>Contrast & inverted typography</h2>
            <p>It is important to ensure that an adequate contrast is evident between typography and the background it is set on.</p>
            <p>All inverted typography needs to be tracked out to accomodate a contrast reversal and the bleed which results from setting light type on a dark background.</p>
          </StandardText>
        </div>
      ]}
    </Columns>
  </GridContainer>
);

export default function Typography() {
  return (
    <Section>
      { renderIntro() }
      { renderContent() }
      { renderDemo() }
    </Section>
  );
}
