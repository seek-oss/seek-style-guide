import React from 'react';

import logo from './logo.svg';

export default function Logo() {
  return (
    <div dangerouslySetInnerHTML={{ __html: logo }} /> // eslint-disable-line react/no-danger
  );
}
