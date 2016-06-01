import React from 'react';
import logo from './logo.svg';

export default function Logo() {
  /* eslint-disable react/no-danger */
  return (
    <div dangerouslySetInnerHTML={{ __html: logo }} />
  );
  /* eslint-enable react/no-danger */
}
