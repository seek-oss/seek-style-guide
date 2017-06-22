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
});
