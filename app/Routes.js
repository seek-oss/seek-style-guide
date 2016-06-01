import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App/App';
import Home from 'Home/Home';
import Buttons from 'Buttons/Buttons';
import TextFields from 'TextFields/TextFields';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/buttons" component={Buttons} />
    <Route path="/textfields" component={TextFields} />
  </Route>
);
