import React from 'react';
import { Route, Switch } from 'react-router';
import { StyleGuideProvider } from 'seek-style-guide/react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from 'Home/Home';
import PageLayout from 'PageLayout/PageLayout';
import Typography from 'Typography/Typography';
import LoadSandbox from 'Sandbox/LoadSandbox';
import Playground from 'Playground/Playground';
import SketchExports from 'SketchExports/SketchExports';
import Demo from 'Demo/Demo';
import demoSpecExports from '../../../../react/*/*.demo.js';
const demoSpecs = demoSpecExports.map(x => x.default);

const demoRoutes = demoSpecs.map(demoSpec => {
  const DemoRoute = () => <Demo spec={demoSpec} />;
  return <Route key={demoSpec.title} path={demoSpec.route} component={DemoRoute} />;
});

export default () => (
  <StyleGuideProvider fullScreen={true} title="SEEK Style Guide">
    <Switch>
      <Route path="/sandbox" render={() => <Header fullWidth />} />
      <Route component={Header} />
    </Switch>
    <Route path="/" exact component={Home} />
    <Route path="/typography" component={Typography} />
    <Route path="/page-layout" component={PageLayout} />
    <Route path="/sandbox" component={LoadSandbox} />
    <Route path="/playground" component={Playground} />
    <Route path="/sketch-exports" component={SketchExports} />
    { demoRoutes }
    <Switch>
      <Route path="/sandbox" render={() => null} />
      <Route component={Footer} />
    </Switch>
  </StyleGuideProvider>
);
