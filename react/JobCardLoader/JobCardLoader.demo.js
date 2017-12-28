import React from 'react';
import PropTypes from 'prop-types';
import JobCardLoader from './JobCardLoader';
import PageBlock from '../PageBlock/PageBlock';

const JobCardLoaderContainer = ({ component: DemoComponent, componentProps }) => {
  return (
    <PageBlock style={{ width: '100%' }}>
      <DemoComponent {...componentProps} />
    </PageBlock>
  );
};

JobCardLoaderContainer.propTypes = {
  component: PropTypes.element,
  componentProps: PropTypes.object
};

export default {
  route: '/jobCardLoader',
  title: 'Job Card Loader',
  component: JobCardLoader,
  container: JobCardLoaderContainer,
  initialProps: {},
  options: []
};
