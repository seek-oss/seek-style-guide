import React from 'react';
import { shallow } from 'enzyme';
import Badge from './Badge';

const renderBadge = props => shallow(<Badge {...props}>2 new</Badge>);

test('should render Badge', () => {
  const badge = renderBadge();
  expect(badge).toMatchSnapshot();
});

test('should render accent Badge', () => {
  const badge = renderBadge({ tone: 'accent' });
  expect(badge).toMatchSnapshot();
});

test('should ignore external className', () => {
  const badge = renderBadge({ className: 'foo' });
  expect(badge).toMatchSnapshot();
});

test('should render critical Badge', () => {
  const badge = renderBadge({ tone: 'critical' });

  expect(badge).toMatchSnapshot();
});

test('should render info Badge', () => {
  const badge = renderBadge({ tone: 'info' });

  expect(badge).toMatchSnapshot();
});

test('should render neutral Badge', () => {
  const badge = renderBadge({ tone: 'neutral' });
  expect(badge).toMatchSnapshot();
});

test('should render secondary Badge', () => {
  const badge = renderBadge({ tone: 'secondary' });
  expect(badge).toMatchSnapshot();
});

test('should render a strong positive Badge', () => {
  const badge = renderBadge({ tone: 'secondary', strong: true });
  expect(badge).toMatchSnapshot();
});
