import markup from './BellIcon.svg';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../private/Icon/Icon';

export default function BellIcon(props) {
  return <Icon markup={markup} {...props} />;
}

BellIcon.displayName = 'BellIcon';
