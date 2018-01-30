import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button:', () => {
  describe('color variants:', () => {
    it('should render callToAction button', () => {
      const wrapper = shallow(<Button color="callToAction">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render hyperlink color button', () => {
      const wrapper = shallow(<Button color="hyperlink">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render completion button', () => {
      const wrapper = shallow(<Button color="completion">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render alert button', () => {
      const wrapper = shallow(<Button color="alert">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render highlight button', () => {
      const wrapper = shallow(<Button color="highlight">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render transparent button', () => {
      const wrapper = shallow(<Button color="transparent">SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ghost callToAction button', () => {
      const wrapper = shallow(<Button color="callToAction" ghost>SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render inverse callToAction button', () => {
      const wrapper = shallow(<Button color="callToAction" inverse>SEEK</Button>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render with node', () => {
    const wrapper = shallow(<Button color="callToAction"><h5>SEEK</h5></Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with array of nodes', () => {
    const wrapper = shallow(<Button color="callToAction"><span>SEEK</span><span>AU</span></Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as an anchor with href="https://www.seek.com.au"', () => {
    const wrapper = shallow(<Button color="hyperlink" component="a" href="https://www.seek.com.au">SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const wrapper = shallow(<Button color="callToAction" className="foo">SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fullwidth button', () => {
    const wrapper = shallow(<Button color="transparent" fullWidth>SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as loading', () => {
    const wrapper = shallow(<Button color="callToAction" loading>SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom component based on it’s reference', () => {
    const CustomComponent = props => <a {...props} someProp="kraken" />;
    const wrapper = shallow(<Button color="callToAction" component={CustomComponent}>SEEK</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
