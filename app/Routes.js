import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App/App';
import Home from 'Home/Home';
import Buttons from 'Buttons/Buttons';
import TextFields from 'TextFields/TextFields';
import Autosuggest from 'Autosuggest/Autosuggest';
import MonthPicker from 'MonthPicker/MonthPicker';
import Dropdown from 'Dropdown/Dropdown';
import Rating from 'Rating/Rating';
import Icons from 'Icons/Icons';
import Typography from 'Typography/Typography';
import Textarea from 'Textarea/Textarea';
import Checkbox from 'Checkbox/Checkbox';
import Playground from 'Playground/Playground';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/buttons" component={Buttons} />
    <Route path="/textfields" component={TextFields} />
    <Route path="/autosuggest" component={Autosuggest} />
    <Route path="/textarea" component={Textarea} />
    <Route path="/monthpicker" component={MonthPicker} />
    <Route path="/dropdown" component={Dropdown} />
    <Route path="/rating" component={Rating} />
    <Route path="/checkbox" component={Checkbox} />
    <Route path="/icons" component={Icons} />
    <Route path="/typography" component={Typography} />

    <Route path="/playground" component={Playground} />
  </Route>
);
