import React from 'react';
import { Router } from 'react-router';
import { createHistory } from 'history';
import routes from './Routes';

const browserHistory = createHistory({
  basename: process.env.BASE_HREF
});

export default function RouterComponent() {
  return (
    <Router routes={routes} history={browserHistory} />
  );
}
