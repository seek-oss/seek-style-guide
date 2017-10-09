import React from 'react';
import PropTypes from 'prop-types';

import generateStructureDataSchema from './generate-structured-data-schema';

/* eslint-disable react/no-danger */
const StructuredDataSchema = ({ locale }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(generateStructureDataSchema(locale))
    }}
  />
);
/* eslint-enable react/no-danger */

StructuredDataSchema.propTypes = {
  locale: PropTypes.oneOf(['AU', 'NZ'])
};

StructuredDataSchema.defaultProps = {
  locale: 'AU'
};

export default StructuredDataSchema;
