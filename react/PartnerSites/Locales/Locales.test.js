import React from 'react';
import { render } from 'enzyme';

import Locales from './Locales';

const renderLocales = props => render(<Locales {...props} />);
const linkRenderer = props => (<a {...props} />);

describe('Locales:', () => {
  it('should render with locale of AU first and active', () => {
    expect(renderLocales({ locale: 'AU', linkRenderer })).toMatchSnapshot();
  });

  it('should render with locale of NZ first and active', () => {
    expect(renderLocales({ locale: 'NZ', linkRenderer })).toMatchSnapshot();
  });
});
