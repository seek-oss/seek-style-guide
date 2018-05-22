import React from 'react';
import { shallow } from 'enzyme';

import ShelfSection from './ShelfSection';

const defaultShelf = {
  shelfLinks: [
    {
      label: 'Job function',
      child: [{
        name: 'Accountant',
        link: '/jobCard'
      }]
    },
    {
      label: 'Industry',
      child: [{
        name: 'Accounting / Audit / Tax Services',
        link: '/jobCard'
      }]
    }
  ],
  tagLinks: [{
    name: 'keyword 1',
    link: '/jobCard'
  }
  ]
};

describe('JobCard - ShelfSection', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ShelfSection shelf={defaultShelf} />);
    expect(wrapper).toMatchSnapshot();
  });
});
