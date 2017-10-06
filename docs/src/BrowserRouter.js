import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'App/App';

export default () => (
  <BrowserRouter basename={process.env.BASE_HREF}>
    <App />
  </BrowserRouter>
);
