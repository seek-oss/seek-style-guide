import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button:', () => {
  describe('color variants:', () => {
    it('should render primary button', () => {
      const wrapper = shallow(<Button color="primary">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render default button', () => {
      const wrapper = shallow(<Button color="default">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render success button', () => {
      const wrapper = shallow(<Button color="success">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render transparent button', () => {
      const wrapper = shallow(<Button color="transparent">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render with node', () => {
    const wrapper = shallow(<Button color="primary"><h5>SEEK</h5></Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with array of nodes', () => {
    const wrapper = shallow(<Button color="primary"><span>SEEK</span><span>AU</span></Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as an anchor with href="https://www.seek.com.au"', () => {
    const wrapper = shallow(<Button color="default" component="a" href="https://www.seek.com.au">SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const wrapper = shallow(<Button color="success" className="foo">SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fullwidth button', () => {
    const wrapper = shallow(<Button color="transparent" fullWidth>SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as loading', () => {
    const wrapper = shallow(<Button color="primary" loading>SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom component based on it’s reference', () => {
    const CustomComponent = props => <a {...props} someProp="kraken" />;
    const wrapper = shallow(<Button color="default" component={CustomComponent}>SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
