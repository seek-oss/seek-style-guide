import React from 'react';
import { shallow } from 'enzyme';
import Badge from './Badge';

const renderBadge = props => shallow(<Badge {...props}>2 new</Badge>);

test('should render Badge', () => {
  const badge = renderBadge();
  expect(badge).toMatchSnapshot();
});
