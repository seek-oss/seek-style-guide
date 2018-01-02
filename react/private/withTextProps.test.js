import { shallow } from 'enzyme';
import React from 'react';

import withTextProps, { sizes } from './withTextProps';

const OriginalComponent = props => <div {...props} />;
const DecoratedComponent = withTextProps(OriginalComponent);

describe('withTextProps:', () => {
  it('should pass down non-size props', () => {
    expect(shallow(<DecoratedComponent className='foo' bar baz={{ a: 1 }} />)).toMatchSnapshot();
  });

  it('should omit boolean size props', () => {
    const boolSizes = {};

    sizes.forEach(size => {
      boolSizes[size] = true;

      return;
    });

    expect(shallow(<DecoratedComponent size="heading" {...boolSizes} />)).toMatchSnapshot();
  });

  sizes.forEach(size => {
    describe(`*${size}*:`, () => {
      it('should pass down string size', () => {
        expect(shallow(<DecoratedComponent size={size} />)).toMatchSnapshot();
      });

      it('should convert boolean size into string size', () => {
        expect(shallow(<DecoratedComponent {...{ [size]: true }} />)).toMatchSnapshot();
      });
    });
  });
});
