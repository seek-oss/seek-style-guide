import React from 'react';
import { shallow } from 'enzyme';
import Columns from './Columns';

describe('Columns:', () => {
  it('should render columns', () => {
    const wrapper = shallow(
      <Columns>
        <div />
        <div />
      </Columns>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render tight columns', () => {
    const wrapper = shallow(
      <Columns tight>
        <div />
        <div />
      </Columns>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render flexible columns', () => {
    const wrapper = shallow(
      <Columns flexible>
        <div />
        <div />
      </Columns>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
