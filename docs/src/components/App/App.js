import React from 'react';
import { Route } from 'react-router';
import { StyleGuideProvider } from 'seek-style-guide/react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from 'Home/Home';
import PageLayout from 'PageLayout/PageLayout';
import Typography from 'Typography/Typography';
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
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/typography" component={Typography} />
    <Route path="/page-layout" component={PageLayout} />
    <Route path="/playground" component={Playground} />
    <Route path="/sketch-exports" component={SketchExports} />
    { demoRoutes }
    <Footer />
  </StyleGuideProvider>
);
