import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button:', () => {
  describe('color variants:', () => {
    it('should render blue button', () => {
      const wrapper = shallow(<Button color="blue">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render pink button', () => {
      const wrapper = shallow(<Button color="pink">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render gray button', () => {
      const wrapper = shallow(<Button color="gray">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render transparent button', () => {
      const wrapper = shallow(<Button color="transparent">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render white ghost button', () => {
      const wrapper = shallow(<Button color="white" ghost>SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render with node', () => {
    const wrapper = shallow(<Button color="blue"><h5>SEEK</h5></Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with array of nodes', () => {
    const wrapper = shallow(<Button color="blue"><span>SEEK</span><span>AU</span></Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as an anchor with href="https://www.seek.com.au"', () => {
    const wrapper = shallow(<Button color="pink" component="a" href="https://www.seek.com.au">SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const wrapper = shallow(<Button color="gray" className="foo">SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fullwidth button', () => {
    const wrapper = shallow(<Button color="transparent" fullWidth>SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as loading', () => {
    const wrapper = shallow(<Button color="blue" loading>SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom component based on it’s reference', () => {
    const CustomComponent = props => <a {...props} someProp="kraken" />;
    const wrapper = shallow(<Button color="pink" component={CustomComponent}>SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
