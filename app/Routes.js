import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App/App';
import Home from 'Home/Home';
import Buttons from 'Buttons/Buttons';
import TextField from 'TextField/TextField';
import Autosuggest from 'Autosuggest/Autosuggest';
import Icons from 'Icons/Icons';
import Typography from 'Typography/Typography';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/buttons" component={Buttons} />
    <Route path="/textfield" component={TextField} />
    <Route path="/autosuggest" component={Autosuggest} />
    <Route path="/icons" component={Icons} />
    <Route path="/typography" component={Typography} />
  </Route>
);
