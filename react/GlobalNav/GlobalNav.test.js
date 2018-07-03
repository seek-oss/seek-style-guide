import React from 'react';
import { render } from 'enzyme';

import GlobalNav from './GlobalNav';

const renderGlobalNav = props => render(<GlobalNav {...props} />);
const linkRenderer = props => (<a {...props} />);

describe('GlobalNav:', () => {
  describe('locale states:', () => {
    it('should render with locale of AU', () => {
      expect(renderGlobalNav({ locale: 'AU', linkRenderer, activePartnerSite: 'jobs' })).toMatchSnapshot();
    });

    it('should render with locale of NZ', () => {
      expect(renderGlobalNav({ locale: 'NZ', linkRenderer, activePartnerSite: 'jobs' })).toMatchSnapshot();
    });

    it('should render without locales if specified', () => {
      expect(renderGlobalNav({ locale: 'NZ', linkRenderer, activePartnerSite: 'jobs', hideLocales: true })).toMatchSnapshot();
    });
  });
  describe('active partner site:', () => {
    it('should render with jobs link as active', () => {
      expect(renderGlobalNav({ locale: 'AU', linkRenderer, activePartnerSite: 'jobs' })).toMatchSnapshot();
    });
    it('should render with courses link as active', () => {
      expect(renderGlobalNav({ locale: 'AU', linkRenderer, activePartnerSite: 'courses' })).toMatchSnapshot();
    });
    it('should render with businesses link as active', () => {
      expect(renderGlobalNav({ locale: 'AU', linkRenderer, activePartnerSite: 'businesses' })).toMatchSnapshot();
    });
    it('should render with volunteering link as active', () => {
      expect(renderGlobalNav({ locale: 'AU', linkRenderer, activePartnerSite: 'volunteering' })).toMatchSnapshot();
    });
  });
});
