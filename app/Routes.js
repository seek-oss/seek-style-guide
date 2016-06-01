import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App/App';
import Home from 'Home/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
