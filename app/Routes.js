import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App/App';
import Home from 'Home/Home';
import Buttons from 'Buttons/Buttons';
import TextFields from 'TextFields/TextFields';
import Icons from 'Icons/Icons';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/buttons" component={Buttons} />
    <Route path="/textfields" component={TextFields} />
    <Route path="/icons" component={Icons} />
  </Route>
);
