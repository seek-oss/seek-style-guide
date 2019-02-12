import React from 'react';
import { render } from 'enzyme';

import Footer from './Footer';

const renderFooter = props => render(<Footer {...props} />);

describe('Footer:', () => {
  it('should render with locale of AU', () => {
    expect(renderFooter({ locale: 'AU' })).toMatchSnapshot();
  });

  it('should render with locale of NZ', () => {
    expect(renderFooter({ locale: 'NZ' })).toMatchSnapshot();
  });

  it('should render when authenticated', () => {
    expect(
      renderFooter({ authenticationStatus: 'authenticated' })
    ).toMatchSnapshot();
  });

  it('should render when unauthenticated', () => {
    expect(
      renderFooter({ authenticationStatus: 'unauthenticated' })
    ).toMatchSnapshot();
  });

  it('should render when authentication is pending', () => {
    expect(renderFooter({ authenticationStatus: 'pending' })).toMatchSnapshot();
  });
});
