import React from 'react';
import { Link } from 'react-router';

import logo from './logo.svg';

export default function Logo() {
  return (
    <Link to="/" dangerouslySetInnerHTML={{ __html: logo }} /> // eslint-disable-line react/no-danger
  );
}
