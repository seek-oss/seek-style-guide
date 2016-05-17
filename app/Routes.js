import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App/App';
import Home from 'Home/Home';

import Theme from 'Theme/Theme';
import ColorPalette from 'Theme/components/ColorPalette/ColorPalette';
import TypeHierarchy from 'Theme/components/TypeHierarchy/TypeHierarchy';
import FontStack from 'Theme/components/FontStack/FontStack';

import Components from 'Components/Components';
import BlueButton from 'Components/components/BlueButton/BlueButton';
import TextField from 'Components/components/TextField/TextField';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/theme" component={Theme} />
    <Route path="/theme/color-palette" component={ColorPalette} />
    <Route path="/theme/type-hierarchy" component={TypeHierarchy} />
    <Route path="/theme/font-stack" component={FontStack} />

    <Route path="/components" component={Components} />
    <Route path="/components/BlueButton" component={BlueButton} />
    <Route path="/components/TextField" component={TextField} />
  </Route>
);
