import React from 'react';
import { shallow } from 'enzyme';
import FooterLinks from './FooterLinks';

const baseUrl = 'https://jobstreet.com.my';
const baseUrlWithLanguage = `${baseUrl}/en`;

const messages = {
  'footer.copyright': 'Copyright © {year} JobStreet.com',
  'footer.link': 'https://www.jobstreet.com',
  'footer.linkText': 'JobStreet International',
  'footer.siteMapLink': `${baseUrl}/sitemap.htm`,
  'footer.siteMapLinkText': 'Site Map',
  'footer.aboutLink': `${baseUrlWithLanguage}/about-us/`,
  'footer.aboutLinkText': 'About Us',
  'footer.profilesLink': `${baseUrl}/career/JobStreet.htm`,
  'footer.profilesLinkText': 'Work With Us',
  'footer.termsLink': `${baseUrlWithLanguage}/about-us/terms-of-use/`,
  'footer.termsLinkText': 'Term of Use',
  'footer.privacyLink': `${baseUrlWithLanguage}/about-us/privacy-policy/`,
  'footer.privacyLinkText': 'Privacy Policy',
  'footer.safeLink': `${baseUrlWithLanguage}/about-us/safe-job-search-guide/`,
  'footer.safeLinkText': 'Safe Job Search Guide',
  'footer.helpLink': `${baseUrlWithLanguage}/user/`,
  'footer.helpLinkText': 'Help',
  'footer.feedbackLink':
    'https://myjobstreet.jobstreet.com.my/home/feedback.php?site=my&sub=feedback',
  'footer.feedbackLinkText': 'Send Feedback'
};

describe('FooterLinks component', () => {
  it('should render supplied messages', () => {
    const wrapper = shallow(<FooterLinks messages={messages} />);
    expect(wrapper).toMatchSnapshot();
  });
});
