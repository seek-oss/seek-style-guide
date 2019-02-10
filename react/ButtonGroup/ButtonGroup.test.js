import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

describe('ButtonGroup:', () => {
  it('should render a button group with node', () => {
    const wrapper = shallow(
      <ButtonGroup>
        <Button color="blue">
          <h5>SEEK</h5>
        </Button>
      </ButtonGroup>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should combine className when passed in', () => {
    const wrapper = shallow(
      <ButtonGroup className="combineMe">
        <Button color="blue">
          <h5>SEEK</h5>
        </Button>
      </ButtonGroup>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
