import React from 'react';
import PropTypes from 'prop-types';
import flatten from 'lodash/flatten';
import values from 'lodash/values';
import omit from 'lodash/omit';
import forEach from 'lodash/forEach';

const mapBooleanProps = (booleanProps, props) => {
  const mappedProps = {};

  forEach(booleanProps, (booleanValues, booleanKey) => {
    forEach(booleanValues, booleanValue => {
      if (props[booleanValue]) {
        mappedProps[booleanKey] = booleanValue;
      }
    });
  });

  return mappedProps;
};

export default booleanProps => OriginalComponent => {
  const allBooleanValues = flatten(values(booleanProps));

  const DecoratedComponent = props => {
    const newProps = {
      ...omit(props, allBooleanValues),
      ...mapBooleanProps(booleanProps, props)
    };

    return <OriginalComponent {...newProps} />;
  };

  DecoratedComponent.propTypes = {
    ...OriginalComponent.propTypes,
    ...(() => {
      const newPropTypes = {};

      forEach(booleanProps, booleanValues => {
        forEach(booleanValues, booleanValue => {
          newPropTypes[booleanValue] = PropTypes.bool;
        });
      });

      return newPropTypes;
    })()
  };

  DecoratedComponent.displayName = OriginalComponent.displayName;

  return DecoratedComponent;
};

