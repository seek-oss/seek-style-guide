import React from 'react';
import PropTypes from 'prop-types';
import PartnerSites from './PartnerSites';

const DummyLinkRenderer = ({ href, ...props }) => (
  <a {...props} />
);

DummyLinkRenderer.propTypes = {
  href: PropTypes.string
};

export const blockSymbols = {
  'PartnerSites/Australia/No Active Product': <PartnerSites linkRenderer={DummyLinkRenderer} />,
  'PartnerSites/Australia/Jobs Product Active': <PartnerSites linkRenderer={DummyLinkRenderer} activeProduct='Jobs' />,
  'PartnerSites/Australia/Courses Product Active': <PartnerSites linkRenderer={DummyLinkRenderer} activeProduct='Courses' />,
  'PartnerSites/Australia/BusinessesForSale Product Active': <PartnerSites linkRenderer={DummyLinkRenderer} activeProduct='Businesses for sale' />,
  'PartnerSites/Australia/Volunteering Product Active': <PartnerSites linkRenderer={DummyLinkRenderer} activeProduct='Volunteering' />,
  'PartnerSites/New Zealand/No Active Product': <PartnerSites locale='NZ' linkRenderer={DummyLinkRenderer} />,
  'PartnerSites/New Zealand/Jobs Product Active': <PartnerSites locale='NZ' linkRenderer={DummyLinkRenderer} activeProduct='Jobs' />,
  'PartnerSites/New Zealand/Courses Product Active': <PartnerSites locale='NZ' linkRenderer={DummyLinkRenderer} activeProduct='Courses' />,
  'PartnerSites/New Zealand/BusinessesForSale Product Active': <PartnerSites locale='NZ' linkRenderer={DummyLinkRenderer} activeProduct='Businesses for sale' />,
  'PartnerSites/New Zealand/Volunteering Product Active': <PartnerSites locale='NZ' linkRenderer={DummyLinkRenderer} activeProduct='Volunteering' />,
};
