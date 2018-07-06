import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  PartnerSites,
  Hidden,
  PageBlock,
  Section,
  Text
} from 'seek-style-guide/react';

const Container = ({ component: DemoComponent, componentProps }) => (
  <Fragment>
    <DemoComponent {...componentProps} />
    <Hidden desktop>
      <PageBlock>
        <Section>
          <Text strong>This component is not visible on mobile.</Text>
        </Section>
      </PageBlock>
    </Hidden>
  </Fragment>
);

Container.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

const ROUTE = '/partner-sites';

export default {
  route: ROUTE,
  title: 'Partner Sites',
  category: 'Layout',
  component: PartnerSites,
  container: Container,
  options: [
    {
      label: 'Active Product',
      type: 'radio',
      states: [
        null,
        'Jobs',
        'Courses',
        'Businesses for sale',
        'Volunteering'
      ].map(activeProduct => ({
        label: activeProduct || 'No active product',
        transformProps: props => ({
          ...props,
          activeProduct
        })
      }))
    },
    {
      label: 'Locale',
      type: 'radio',
      states: [
        {
          label: 'AU',
          transformProps: props => props
        },
        {
          label: 'NZ',
          transformProps: props => ({
            ...props,
            locale: 'NZ'
          })
        }
      ]
    }
  ]
};
