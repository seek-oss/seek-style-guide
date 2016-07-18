import styles from './Iconography.less';

import React from 'react';

import GridContainer from 'GridContainer/GridContainer';
import Columns from 'Columns/Columns';
import StandardText from 'StandardText/StandardText';
import Section from 'Section/Section';
import HeroText from 'HeroText/HeroText';
import SubheadingText from 'SubheadingText/SubheadingText';
import IconSample from 'IconSample/IconSample';
import {
  ChevronIcon,
  CloseIcon,
  HeartIcon,
  ProfileIcon,
  SearchIcon,
  StarIcon,
  ThumbsUpIcon,
  ErrorIcon,
  TickIcon,
  HelpIcon
} from 'seek-style-guide/react';

const renderDemo = () => (
  <div className={styles.demo}>
    <GridContainer>
      <div className={styles.samples}>
        <IconSample Icon={HeartIcon} name="Heart" />
        <IconSample Icon={ProfileIcon} name="Profile" />
        <IconSample Icon={TickIcon} name="Tick" />
        <IconSample Icon={SearchIcon} name="Search" />
        <IconSample Icon={ChevronIcon} direction="down" name="Down" />
        <IconSample Icon={ChevronIcon} direction="up" name="Up" />
        <IconSample Icon={ChevronIcon} direction="right" name="Right" />
        <IconSample Icon={ChevronIcon} direction="left" name="Left" />
        <IconSample Icon={StarIcon} name="Star" />
        <IconSample Icon={ThumbsUpIcon} name="Thumbs Up" />
        <IconSample Icon={CloseIcon} name="Close" />
        <IconSample Icon={ErrorIcon} name="Error" />
        <IconSample Icon={HelpIcon} name="Help" />
      </div>
    </GridContainer>
  </div>
);

const renderIntro = () => (
  <GridContainer>
    <a name="Iconography" />
    <h1><HeroText>Iconography</HeroText></h1>
    <SubheadingText>An icon is a pictogram illustration that is used in many digital environments to attract users to important content and to help remind them how to re-find content when they return to that page. It needs to be simple and meaningful in that it truly communicates something of the subject it represents.</SubheadingText>
  </GridContainer>
);

const renderContent = () => (
  <GridContainer>
    <Columns>
      <div>
        <StandardText>
          <h2>Icon styling & when to use them</h2>
          <p>We look to use established interactive paradigms for the design of all elements. Strict adherence to this practice ensures a high degree of usability because users don't need to interpret meaning or justify decisions they make when interacting with content provided.</p>
          <p>This design principle is especially important when it comes to the design of our icons. An icon has powerful visual properties, and must be used sparing in order to make them easy to find.</p>
        </StandardText>
      </div>
      <div>
        <StandardText>
          <h2>How our icons style works</h2>
          <p>The consistent shape and weight of SEEK icons must be maintained at all times. Icons are composed within a circular exterior shape.</p>
          <p>An internal square with the same circumference help to frame the icon shape, especially with square styled icons. Two smaller internal circle provide reference points for a vast variety of subjects.</p>
        </StandardText>
      </div>
      <div style={{ backgroundColor: '#d6d6d6', padding: '81px 10px 54px', textAlign: 'center' }}>
        <StandardText>&lt;insert circumference graphic&gt;</StandardText>
      </div>
    </Columns>
  </GridContainer>
);

export default function Iconography() {
  return (
    <Section>
      {renderIntro()}
      {renderContent()}
      {renderDemo()}
    </Section>
  );
}
