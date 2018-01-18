import React from 'react';
import Header from './Header';

export const blockSymbols = {
  'JobsDB/Header/Logged out': <Header user={{}} />,
  'JobsDB/Header/Logged in': (
    <Header user={{ candidate: { id: 1, username: 'Rey' } }} />
  )
};
