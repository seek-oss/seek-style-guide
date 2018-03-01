import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from './MenuItem';

describe('MenuItem', () => {
  const FakeIcon = () => {
    return (
      <div>I'm an icon!</div>
    );
  };

  const defaultProps = {
    brandStyles: {}
  };

  it('should render with no icon and default props', () => {
    const wrapper = shallow(<MenuItem {...defaultProps}>Awesome Brand Portal!</MenuItem>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with icon and default props', () => {
    const wrapper = shallow(<MenuItem ItemIcon={FakeIcon} {...defaultProps}>Awesome Brand Portal!</MenuItem>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a linkUrl', () => {
    const testProps = {
      ...defaultProps,
      linkUrl: 'https://brand.seekasia.com/'
    };
    const wrapper = shallow(<MenuItem {...testProps}>Awesome Brand Portal!</MenuItem>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a click handler', () => {
    const testProps = {
      ...defaultProps,
      handleClick: jest.fn()
    };
    const wrapper = shallow(<MenuItem {...testProps}>Awesome Brand Portal!</MenuItem>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all optional props', () => {
    const testProps = {
      ...defaultProps,
      brandStyles: {
        menuIcon: 'menuIcon'
      },
      iconProps: {
        direction: 'left',
        svgClassName: 'awesomeSVG'
      },
      className: 'awesomeClass',
      itemClass: 'seriously I thought css modules would solve this precarious css specificity nonsense'
    };
    const wrapper = shallow(<MenuItem ItemIcon={FakeIcon} {...testProps}>Awesome Brand Portal!</MenuItem>);
    expect(wrapper).toMatchSnapshot();
  });
});
