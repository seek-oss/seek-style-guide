import React from 'react';
import { shallow } from 'enzyme';

import Highlight from './Highlight';

describe('Highlight:', () => {
  it('should render with defaults', () => {
    expect(shallow(<Highlight>text</Highlight>)).toMatchSnapshot();
  });

  it('should render with className', () => {
    expect(
      shallow(<Highlight className="foo">text</Highlight>)
    ).toMatchSnapshot();
  });

  it('should render with tone', () => {
    expect(
      shallow(
        <Highlight tone="critical" className="foo">
          text
        </Highlight>
      )
    ).toMatchSnapshot();
  });

  it('should render as secondary', () => {
    expect(
      shallow(
        <Highlight secondary tone="critical" className="foo">
          text
        </Highlight>
      )
    ).toMatchSnapshot();
  });
});
