import React from 'react';
import { render } from 'enzyme';

import Locales from './Locales';

const renderLocales = props => render(<Locales {...props} />);
const linkRenderer = props => <a {...props} />;
const localeLinks = {
  AU: {
    'data-analytics': 'header:au+homepage',
    href: 'https://www.seek.com.au',
    title: 'SEEK Australia',
    children: 'AU'
  },
  NZ: {
    'data-analytics': 'header:nz+homepage',
    href: 'https://www.seek.co.nz',
    title: 'SEEK New Zealand',
    children: 'NZ'
  }
};

describe('Locales:', () => {
  it('should render with locale of AU first and active', () => {
    expect(
      renderLocales({ locale: 'AU', linkRenderer, localeLinks })
    ).toMatchSnapshot();
  });

  it('should render with locale of NZ first and active', () => {
    expect(
      renderLocales({ locale: 'NZ', linkRenderer, localeLinks })
    ).toMatchSnapshot();
  });
});
