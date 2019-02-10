import { shallow } from 'enzyme';
import React from 'react';

import withTextProps, { sizes } from './withTextProps';

const OriginalComponent = props => <div {...props} />;
const DecoratedComponent = withTextProps(OriginalComponent);

describe('withTextProps:', () => {
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'error');
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should pass down non-size props', () => {
    expect(
      shallow(<DecoratedComponent className="foo" bar baz={{ a: 1 }} />)
    ).toMatchSnapshot();
  });

  it('should throw prop validation error if size is unknown', () => {
    shallow(<DecoratedComponent size="head" />);

    const expectedError = expect.stringMatching(
      /Invalid prop size='head' supplied to OriginalComponent/
    );
    expect(spy).toBeCalledWith(expectedError);
  });

  it('should omit size prop if boolean size is supplied and throw prop validation error', () => {
    expect(
      shallow(<DecoratedComponent size="heading" hero />)
    ).toMatchSnapshot();

    const expectedError = expect.stringMatching(
      /Seems that you've accidentially supplied boolean size along with size='heading' to OriginalComponent, please remove one of them. Otherwise boolean prop will overwrite the 'size' prop/
    );
    expect(spy).toBeCalledWith(expectedError);
  });

  sizes.forEach(size => {
    describe(`*${size}*:`, () => {
      it('should pass down string size', () => {
        expect(shallow(<DecoratedComponent size={size} />)).toMatchSnapshot();
      });

      it('should convert boolean size into string size', () => {
        expect(
          shallow(<DecoratedComponent {...{ [size]: true }} />)
        ).toMatchSnapshot();
      });
    });
  });
});
