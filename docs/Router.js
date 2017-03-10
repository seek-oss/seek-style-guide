import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './Routes';

export default function RouterComponent() {
  return (
    <Router routes={routes} history={browserHistory} />
  );
}
