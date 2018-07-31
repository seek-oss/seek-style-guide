import React from 'react';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';

import ReadMore from './ReadMore';
import Text from '../Text/Text';
import Card from '../Card/Card';
import Section from '../Section/Section';

import styles from './ReadMore.demo.less';

const longText = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nulla
    venenatis purus placerat sodales. Aenean ipsum metus, imperdiet eu iaculis
    at, sollicitudin sed felis. Mauris faucibus risus at ex facilisis volutpat.
    Integer volutpat ullamcorper velit at mattis. Cras ultrices vestibulum
    egestas. Vivamus sollicitudin metus nec nulla ullamcorper ultrices vitae in
    est. Maecenas scelerisque turpis ac ultrices convallis. Integer maximus
    libero augue, sit amet maximus risus interdum in. Praesent congue feugiat
    consequat. Suspendisse feugiat mauris non dui aliquet suscipit.
  </Text>
);

const mediumText = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nulla
    venenatis purus placerat sodales. Aenean ipsum metus, imperdiet eu iaculis
    at, sollicitudin sed felis. Mauris faucibus risus at ex facilisis volutpat.
    Integer volutpat ullamcorper velit.
  </Text>
);

const shortText = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nulla
    venenatis purus placerat sodales.
  </Text>
);

const ReadMoreContainer = ({ component: DemoComponent, componentProps }) => (
  <Card
    style={{ width: 500 }}
    className={
      componentProps.backgroundColor === 'body' ? styles.grayBackground : ''
    }>
    <Section>
      <DemoComponent {...componentProps} />
    </Section>
  </Card>
);

ReadMoreContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/read-more',
  title: 'Read More',
  category: 'Layout',
  component: ReadMore,
  container: ReadMoreContainer,
  initialProps: {
    maxLines: 3,
    children: longText
  },
  options: [
    {
      label: 'Text',
      type: 'radio',
      states: [
        {
          label: 'Long text',
          transformProps: props => ({
            ...props,
            children: longText
          })
        },
        {
          label: 'Medium text',
          transformProps: props => ({
            ...props,
            children: mediumText
          })
        },
        {
          label: 'Short text',
          transformProps: props => ({
            ...props,
            children: shortText
          })
        }
      ]
    },
    {
      label: 'Max',
      type: 'radio',
      states: [
        {
          label: '3 lines',
          transformProps: props => ({
            ...omit(props, 'maxRows'),
            maxLines: 3
          })
        },
        {
          label: '5 lines',
          transformProps: props => ({
            ...omit(props, 'maxRows'),
            maxLines: 5
          })
        },
        {
          label: '0 rows/lines',
          transformProps: props => omit(props, ['maxLines', 'maxRows'])
        },
        {
          label: '10 rows',
          transformProps: props => ({
            ...omit(props, 'maxLines'),
            maxRows: 10
          })
        },
        {
          label: '20 rows',
          transformProps: props => ({
            ...omit(props, 'maxLines'),
            maxRows: 20
          })
        }
      ]
    },
    {
      label: 'Color',
      type: 'radio',
      states: [
        {
          label: 'Default Background',
          transformProps: props => ({
            ...omit(props, 'backgroundColor')
          })
        },
        {
          label: 'Card',
          transformProps: props => ({
            ...props,
            backgroundColor: 'card'
          })
        },
        {
          label: 'Body',
          transformProps: props => ({
            ...props,
            backgroundColor: 'body'
          })
        }
      ]
    },
    {
      label: 'labels',
      type: 'checklist',
      states: [
        {
          label: 'Alternative labels',
          transformProps: props => ({
            ...props,
            moreLabel: 'Tell me more!',
            lessLabel: 'Go away'
          })
        }
      ]
    }
  ]
};
