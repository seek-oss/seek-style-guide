import React from 'react';
import { render } from 'enzyme';

import Products from './Products';

const renderProducts = props => render(<Products {...props} />);
const linkRenderer = props => (<a {...props} />);

describe('Products:', () => {
  describe('locale states:', () => {
    it('should render with locale of AU', () => {
      expect(renderProducts({ locale: 'AU', linkRenderer })).toMatchSnapshot();
    });

    it('should render with locale of NZ', () => {
      expect(renderProducts({ locale: 'NZ', linkRenderer })).toMatchSnapshot();
    });
  });
  describe('active product states:', () => {
    it('should render with no link as active by default', () => {
      expect(renderProducts({ locale: 'AU', linkRenderer })).toMatchSnapshot();
    });
    it('should render with jobs link as active', () => {
      expect(renderProducts({ locale: 'AU', linkRenderer, activeProduct: 'Jobs' })).toMatchSnapshot();
    });
    it('should render with courses link as active', () => {
      expect(renderProducts({ locale: 'AU', linkRenderer, activeProduct: 'Courses' })).toMatchSnapshot();
    });
    it('should render with businesses link as active', () => {
      expect(renderProducts({ locale: 'AU', linkRenderer, activeProduct: 'Businesses for sale' })).toMatchSnapshot();
    });
    it('should render with volunteering link as active', () => {
      expect(renderProducts({ locale: 'AU', linkRenderer, activeProduct: 'Volunteering' })).toMatchSnapshot();
    });
  });
});
