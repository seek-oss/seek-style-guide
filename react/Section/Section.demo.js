import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import PageBlock from '../PageBlock/PageBlock';
import Text from '../Text/Text';

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
  category: 'Layout',
  component: Section,
  container: SectionContainer,
  block: true,
  initialProps: {
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
    }
  ]
};
