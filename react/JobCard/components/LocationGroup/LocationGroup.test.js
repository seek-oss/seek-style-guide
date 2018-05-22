import React from 'react';
import { shallow } from 'enzyme';

import LocationGroup from './LocationGroup';

const defaultLocations = [
  {
    name: 'Pahang',
    link: '/jobCard'
  },
  {
    name: 'Selangor',
    link: '/jobCard',
    child: {
      name: 'Cheras',
      link: '/jobCard',
      child: {
        name: 'Near Leisure Mall'
      }
    }
  }
];

describe('JobCard - LocationGroup', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LocationGroup locations={defaultLocations} />);
    expect(wrapper).toMatchSnapshot();
  });
});
