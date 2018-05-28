import React from 'react';
import { shallow } from 'enzyme';

import ShelfSection from './ShelfSection';

const defaultShelf = {
  shelfLinks: [
    {
      label: 'Job function',
      items: [
        {
          name: 'Accounting',
          link: '/jobCard',
          children: [
            {
              name: 'Accountant',
              link: '/jobCard'
            },
            {
              name: 'Audit',
              link: '/jobCard'
            },
            {
              name: 'Others',
              link: '/jobCard'
            }
          ]
        },
        {
          name: 'Admin & HR',
          link: '/jobCard',
          children: [
            {
              name: 'Receptionist',
              link: '/jobCard'
            }
          ]
        }
      ]
    },
    {
      label: 'Industry',
      items: [{
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

/* eslint-disable react/prop-types */
const customLink = ({ link, children, ...restProps }) => (
  <span {...restProps}>{children}</span>
);

describe('JobCard - ShelfSection', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ShelfSection shelf={defaultShelf} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom link', () => {
    const wrapper = shallow(<ShelfSection shelf={defaultShelf} LinkComponent={customLink} />);
    expect(wrapper).toMatchSnapshot();
  });
});
