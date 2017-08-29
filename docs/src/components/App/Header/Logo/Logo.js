import logoMarkup from './logo.svg';
import jobsDBLogoMarkup from './jobsdb_logo.svg';
import jobStreetLogoMarkup from './jobstreet_logo.svg';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Logo({ svgClassName, tenant, ...restProps }) {
  let brandedlogoMarkup = logoMarkup;
  if (tenant === 'jobsDB') {
    brandedlogoMarkup = jobsDBLogoMarkup;
  } else if (tenant === 'jobStreet') {
    brandedlogoMarkup = jobStreetLogoMarkup;
  }
  const svgWithClasses = brandedlogoMarkup
    .replace('<svg ', `<svg class="${classnames(svgClassName)}" `);

  return (
    <div dangerouslySetInnerHTML={{ __html: svgWithClasses }} {...restProps} /> // eslint-disable-line react/no-danger
  );
}

Logo.propTypes = {
  svgClassName: PropTypes.string,
  tenant: PropTypes.string,
  className: PropTypes.string
};

Logo.defaultProps = {
  svgClassName: '',
  className: ''
};
