import React from 'react';
import { render } from 'enzyme';

import Sites from './Sites';

const renderSites = props => render(<Sites {...props} />);
const linkRenderer = props => <a {...props} />;

describe('Sites:', () => {
  describe('locale states:', () => {
    it('should render with locale of AU', () => {
      expect(renderSites({ locale: 'AU', linkRenderer })).toMatchSnapshot();
    });

    it('should render with locale of NZ', () => {
      expect(renderSites({ locale: 'NZ', linkRenderer })).toMatchSnapshot();
    });
  });
  describe('active product states:', () => {
    it('should render with no link as active by default', () => {
      expect(renderSites({ locale: 'AU', linkRenderer })).toMatchSnapshot();
    });
    it('should render with jobs link as active', () => {
      expect(
        renderSites({ locale: 'AU', linkRenderer, activeProduct: 'Jobs' })
      ).toMatchSnapshot();
    });
    it('should render with courses link as active', () => {
      expect(
        renderSites({ locale: 'AU', linkRenderer, activeProduct: 'Courses' })
      ).toMatchSnapshot();
    });
    it('should render with businesses link as active', () => {
      expect(
        renderSites({
          locale: 'AU',
          linkRenderer,
          activeProduct: 'Businesses for sale'
        })
      ).toMatchSnapshot();
    });
    it('should render with volunteering link as active', () => {
      expect(
        renderSites({
          locale: 'AU',
          linkRenderer,
          activeProduct: 'Volunteering'
        })
      ).toMatchSnapshot();
    });
  });
});
