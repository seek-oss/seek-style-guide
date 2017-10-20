import React from 'react';
import PropTypes from 'prop-types';
import { Columns, PageBlock, Card, Section, Text } from 'seek-style-guide/react';

const ColumnsContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <DemoComponent {...componentProps} />
  </PageBlock>
);
ColumnsContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

const makeColumns = count => [...new Array(count)].map((x, i) => (
  <Card key={i}>
    <Section>
      <Text heading>Column {i + 1}</Text>
      <Text>This card is currently acting as a column.</Text>
    </Section>
  </Card>
));

export default {
  route: '/columns',
  title: 'Columns',
  component: Columns,
  container: ColumnsContainer,
  block: true,
  initialProps: {
    children: makeColumns(2)
  },
  options: [
    {
      label: 'Number of Columns',
      type: 'radio',
      states: [
        {
          label: 'Two Columns',
          transformProps: props => props
        },
        {
          label: 'Three Columns',
          transformProps: props => ({
            ...props,
            children: makeColumns(3)
          })
        },
        {
          label: 'Four Columns',
          transformProps: props => ({
            ...props,
            children: makeColumns(4)
          })
        }
      ]
    }
  ]
};
