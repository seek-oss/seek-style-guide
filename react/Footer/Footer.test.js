import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

const renderFooter = props => renderer.create(<Footer {...props} />);

describe('Footer:', () => {
  it('should render with locale of AU', () => {
    expect(renderFooter({ locale: 'AU' }).toJSON()).toMatchSnapshot();
  });

  it('should render with locale of NZ', () => {
    expect(renderFooter({ locale: 'NZ' }).toJSON()).toMatchSnapshot();
  });
});
