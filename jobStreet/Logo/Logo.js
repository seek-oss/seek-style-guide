import React from 'react';
import PropTypes from 'prop-types';

import markupID from './JobStreetLogoID.svg';
import markupMY from './JobStreetLogoMY.svg';
import markupPH from './JobStreetLogoPH.svg';
import markupSG from './JobStreetLogoSG.svg';

const getMarkup = country => {
  switch (country.toLowerCase()) {
    case 'sg':
      return markupSG;
    case 'id':
      return markupID;
    case 'ph':
      return markupPH;
    default:
      return markupMY;
  }
};

export default function Logo({ country, svgClassName, ...restProps }) {
  const svgWithClasses = getMarkup(country)
    .replace('<svg ', `<svg class="${svgClassName}" `);

  return (
    <span dangerouslySetInnerHTML={{ __html: svgWithClasses }} {...restProps} /> // eslint-disable-line react/no-danger
  );
}

Logo.propTypes = {
  svgClassName: PropTypes.string,
  className: PropTypes.string,
  country: PropTypes.string
};

Logo.defaultProps = {
  svgClassName: '',
  className: '',
  country: 'my'
};
