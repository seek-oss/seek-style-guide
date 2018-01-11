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

SectionContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/section',
  title: 'Section',
  component: Section,
  container: SectionContainer,
  initialProps: {
    type: TYPE.POSITIVE,
    level: LEVEL.PRIMARY,
    message: 'I\'m some timely text that helps the user understand something',
    hideIcon: false,
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
        }
      ]
    },
    {
      label: 'Type',
      type: 'radio',
      states: [
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            type: TYPE.POSITIVE
          })
        },
        {
          label: 'Info',
          transformProps: props => ({
            ...props,
            type: TYPE.INFO
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            type: TYPE.CRITICAL
          })
        },
        {
          label: 'Help',
          transformProps: props => ({
            ...props,
            type: TYPE.HELP
          })
        }
      ]
    },
    {
      label: 'Level',
      type: 'radio',
      states: [
        {
          label: 'Primary',
          transformProps: props => ({
            ...props,
            level: LEVEL.PRIMARY
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            level: LEVEL.SECONDARY
          })
        }
      ]
    }
  ]
};
