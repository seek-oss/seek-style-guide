import React from 'react';
import PropTypes from 'prop-types';
import styles from './LocationGroup.less';
import defaultLink from '../Link/Link';

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

const renderLocation = ({ link, name, child, LinkComponent, key }) => {
  const locationLink = (link) ?
    (<LinkComponent link={link} className={styles.locationLink} key={key} >{name}</LinkComponent>) :
    (<span className={styles.locationName} key={key}>{name}</span>);
  if (child) {
    return [locationLink, ' > ', ...renderLocation({ ...child, LinkComponent, key: `${key}1` })];
  }
  return [locationLink];
};

const LocationGroup = ({ locations, LinkComponent = defaultLink }) => {
  return locations.map((location, index) =>
    renderLocation({ ...location, LinkComponent, key: index })
  ).reduce((prev, curr) => [prev, ', ', ...curr]);
};

export default LocationGroup;

LocationGroup.propTypes = {
  locations: LocationsPropTypes.isRequired,
  LinkComponent: PropTypes.func
};
