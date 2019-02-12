import React from 'react';
import { render } from 'enzyme';

import PartnerSites from './PartnerSites';

const renderPartnerSites = props => render(<PartnerSites {...props} />);

describe('Header:', () => {
  const links = {
    AU: {
      'data-analytics': 'header:au+employer',
      href: 'https://talent.seek.com.au',
      title: 'SEEK Employer Australia',
      children: 'AU'
    },
    NZ: {
      'data-analytics': 'header:nz+employer',
      href: 'https://talent.seek.co.nz',
      title: 'SEEK Employer New Zealand',
      children: 'NZ'
    }
  };
  it('should render with locale of AU', () => {
    expect(renderPartnerSites({ locale: 'AU' })).toMatchSnapshot();
  });

  it('should render with locale of NZ', () => {
    expect(renderPartnerSites({ locale: 'NZ' })).toMatchSnapshot();
  });

  it('should render with overridden AU Locale link', () => {
    expect(
      renderPartnerSites({ locale: 'NZ', localeLinks: links })
    ).toMatchSnapshot();
  });

  it('should render with overridden NZ Locale link', () => {
    expect(
      renderPartnerSites({ locale: 'AU', localeLinks: links })
    ).toMatchSnapshot();
  });
});
