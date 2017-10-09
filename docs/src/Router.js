import React from 'react';
import { Router } from 'react-router';
import { createHistory, useBasename } from 'history';
import routes from './Routes';

const browserHistory = useBasename(createHistory)({
  basename: process.env.BASE_HREF
});

export default function RouterComponent() {
  return (
    <Router routes={routes} history={browserHistory} />
  );
}
