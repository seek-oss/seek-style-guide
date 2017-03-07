import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'App/App';
import Home from 'Home/Home';
import Demo from 'Demo/Demo';
import demoSpecs from './demoSpecs';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    {
      demoSpecs.map(demoSpec => {
        const DemoRoute = () => <Demo spec={demoSpec} />;
        return <Route key={demoSpec.title} path={demoSpec.route} component={DemoRoute} />;
      })
    }
  </Route>
);
