import React from 'react';
import Header from './Header';

export const blockSymbols = {
  'JobStreet/Header/Logged out': <Header user={{}} />,
  'JobStreet/Header/Logged in': <Header user={{ candidate: { id: 1, username: 'Rose' } }} />
};
