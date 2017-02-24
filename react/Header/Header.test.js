import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

const renderHeader = props => renderer.create(<Header {...props} />);

describe('Header:', () => {
  it('should render with locale of AU', () => {
    expect(renderHeader({ locale: 'AU' }).toJSON()).toMatchSnapshot();
  });

  it('should render with locale of NZ', () => {
    expect(renderHeader({ locale: 'NZ' }).toJSON()).toMatchSnapshot();
  });

  it('should render when authenticated', () => {
    expect(renderHeader({ authenticated: true, userName: 'Leeroy' }).toJSON()).toMatchSnapshot();
  });

  it('should render when activeTab is \'Profile\'', () => {
    expect(renderHeader({ activeTab: 'Profile' }).toJSON()).toMatchSnapshot();
  });

  it('should render with no divider', () => {
    expect(renderHeader({ divider: false }).toJSON()).toMatchSnapshot();
  });
});
