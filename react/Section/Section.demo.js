import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import PageBlock from '../PageBlock/PageBlock';
import Text from '../Text/Text';
import { TONE } from '../private/tone';
import { LEVEL } from '../private/level';

const SectionContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <div style={{ backgroundColor: 'aqua' }}>
      <DemoComponent {...componentProps} />
    </div>
  </PageBlock>
);

const SectionUnstyledContent = (
  <Text>This content is nested within a Section component</Text>
);

SectionContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/section',
  title: 'Section',
  category: 'Layout',
  component: Section,
  container: SectionContainer,
  block: true,
  initialProps: {
    slim: false,
    pullout: false,
    onClose: () => console.log('On close handler called'),
    children: (
      <div style={{ backgroundColor: 'blue', color: 'white' }}>
        <Text>This content is nested within a Section component</Text>
      </div>
    )
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Header',
          transformProps: props => ({
            ...props,
            header: true,
            children: (
              <div style={{ backgroundColor: 'blue', color: 'white' }}>
                <Text hero>
                  This content is nested within a Section component
                </Text>
              </div>
            )
          })
        },
        {
          label: 'Slim',
          transformProps: props => ({
            ...props,
            slim: true
          })
        },
        {
          label: 'Pullout',
          transformProps: props => ({
            ...props,
            pullout: true
          })
        }
      ]
    },
    {
      label: 'Tone',
      type: 'radio',
      states: [
        {
          label: 'Select tone',
          transformProps: props => props
        },
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            tone: TONE.POSITIVE,
            children: SectionUnstyledContent
          })
        },
        {
          label: 'Info',
          transformProps: props => ({
            ...props,
            tone: TONE.INFO,
            children: SectionUnstyledContent
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            tone: TONE.CRITICAL,
            children: SectionUnstyledContent
          })
        },
        {
          label: 'Help',
          transformProps: props => ({
            ...props,
            tone: TONE.HELP,
            children: SectionUnstyledContent
          })
        }
      ]
    },
    {
      label: 'Level',
      type: 'radio',
      states: [
        {
          label: 'Select level',
          transformProps: props => props
        },
        {
          label: 'Primary',
          transformProps: props => ({
            ...props,
            level: LEVEL.PRIMARY,
            children: SectionUnstyledContent
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            level: LEVEL.SECONDARY,
            children: SectionUnstyledContent
          })
        }
      ]
    }
  ]
};
