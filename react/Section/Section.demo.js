import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import PageBlock from '../PageBlock/PageBlock';
import Text from '../Text/Text';
import { LEVEL, TYPE } from '../Section/Section';

const SectionContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <div style={{ backgroundColor: 'aqua' }}>
      <DemoComponent {...componentProps} />
    </div>
  </PageBlock>
);

const SectionUnstyledContent = <Text>This content is nested within a Section component</Text>;

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
    type: '',
    level: '',
    hideIcon: false,
    slim: false,
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
                <Text hero>This content is nested within a Section component</Text>
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
        }
      ]
    },
    {
      label: 'Type',
      type: 'radio',
      states: [
        {
          label: 'Select type',
          transformProps: props => props
        },
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            type: TYPE.POSITIVE,
            children: SectionUnstyledContent
          })
        },
        {
          label: 'Info',
          transformProps: props => ({
            ...props,
            type: TYPE.INFO,
            children: SectionUnstyledContent
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            type: TYPE.CRITICAL,
            children: SectionUnstyledContent
          })
        },
        {
          label: 'Help',
          transformProps: props => ({
            ...props,
            type: TYPE.HELP,
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
