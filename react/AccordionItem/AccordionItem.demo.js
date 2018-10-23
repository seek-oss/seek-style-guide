import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AccordionItem, Text, PageBlock, Section } from 'seek-style-guide/react';

class AccordionContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    return (
      <PageBlock>
        <Section>
          <DemoComponent
            {...componentProps}
          />
        </Section>
      </PageBlock>
    );
  }
}

export default {
  route: '/accordionitem',
  title: 'Accordion Item',
  category: 'Layout',
  component: AccordionItem,
  container: AccordionContainer,
  block: true,
  initialProps: {
    title: () => <Text>Business ethics and the characteristics that are defining our generations leadership</Text>,
    onClick: () => {},
    id: 'accordion_1',
    children: <Text>Hello world</Text>,
  },
  options: [
    {
      label: 'Type',
      type: 'checkbox',
      states: [
        {
          label: 'Expanded',
          transformProps: props => ({
            ...props,
            expanded: true
          })
        }
      ]
    }
  ]
};
