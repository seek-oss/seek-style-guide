import React from 'react';
import PropTypes from 'prop-types';
import styles from './LocationGroup.less';

export const LocationsPropTypes = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  link: PropTypes.string,
  child: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    child: PropTypes.shape({
      name: PropTypes.string
    })
  })
}));

const renderLocation = ({ link, name, child }) => {
  const locationLink = (link) ? (<a href={link} className={styles.locationLink}><span>{name}</span></a>) : (<span className={styles.locationName}>{name}</span>);
  if (child) {
    const seperator = (<span>&nbsp;>&nbsp;</span>);
    return [locationLink, seperator, ...renderLocation(child)];
  }
  return [locationLink];
};

const LocationGroup = ({ locations }) => {
  return locations.reduce(
    (accLocations, location, index) => {
      if (index > 0) {
        accLocations.push(<span>,&nbsp;</span>);
      }
      accLocations.push(renderLocation(location));
      return accLocations;
    }, []
  );
};

export default LocationGroup;

LocationGroup.propTypes = {
  locations: LocationsPropTypes.isRequired
};
