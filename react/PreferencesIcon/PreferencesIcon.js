import svgMarkup from './Preferences.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function PreferencesIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

PreferencesIcon.displayName = 'PreferencesIcon';
