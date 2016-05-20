import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App/App';
import Home from 'Home/Home';

import Typography from 'Typography/Typography';
import ColourPalette from 'ColourPalette/ColourPalette';
import Grid from 'Grid/Grid';
import Icons from 'Icons/Icons';
import Buttons from 'Buttons/Buttons';
import Fields from 'Fields/Fields';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/typography" component={Typography} />
    <Route path="/colours" component={ColourPalette} />
    <Route path="/grid" component={Grid} />
    <Route path="/icons" component={Icons} />
    <Route path="/buttons" component={Buttons} />
    <Route path="/fields" component={Fields} />
  </Route>
);
