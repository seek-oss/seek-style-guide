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
      ].map(activeSite => ({
        label: activeSite || 'No active site',
        transformProps: props => ({
          ...props,
          activeSite
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
    },
    {
      label: 'Override Locale Links',
      type: 'checkbox',
      states: [
        {
          label: 'Override Locale Links',
          transformProps: props => ({
            ...props,
            localeLinks: {
              AU: {
                'data-analytics': 'header:au+employer',
                href: 'https://talent.seek.com.au',
                title: 'SEEK Employer Australia'
              },
              NZ: {
                'data-analytics': 'header:nz+employer',
                href: 'https://talent.seek.co.nz',
                title: 'SEEK Employer New Zealand'
              }
            }
          })
        }
      ]
    }
  ]
};
