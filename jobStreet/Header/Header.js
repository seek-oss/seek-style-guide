import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.less';
import { Header as GlobalHeader } from 'seek-asia-style-guide/react';
import Logo from '../Logo/Logo';
import { HomeIcon, PortalIcon, CompanyIcon, LightbulbIcon, EducationIcon } from 'seek-asia-style-guide/react';
import { getLocalization, locales } from '../localization';

const getJobStreetProps = ({ country, language }) => {
  const messages = getLocalization({ country, language });

  const links = [
    { title: messages['header.homeTitle'], url: messages['header.homeUrl'], ItemIcon: HomeIcon },
    { title: messages['header.myJobStreetTitle'], url: messages['header.myJobStreetUrl'], ItemIcon: PortalIcon },
    { title: messages['header.companyProfilesTitle'], url: messages['header.companyProfilesUrl'], ItemIcon: CompanyIcon },
    { title: messages['header.careerInsightsTitle'], url: messages['header.careerInsightsUrl'], ItemIcon: LightbulbIcon },
    { title: messages['header.educationTitle'], url: messages['header.educationUrl'], ItemIcon: EducationIcon }
  ];

  const more = [
    { title: messages['header.overseasJobsTitle'], url: messages['header.overseasJobsUrl'] },
    { title: messages['header.freshGradJobsTitle'], url: messages['header.freshGradJobsUrl'] },
    { title: messages['header.classifiedJobsTitle'], url: messages['header.classifiedJobsUrl'] }
  ];

  return {
    links,
    messages,
    more
  };
};

const Header = ({ country = 'my', language = 'en', activeTab, loginAvailable = false, ...restProps }) => {
  return (
    <GlobalHeader
      LogoComponent={Logo}
      logoProps={{ country }}
      activeTab={activeTab}
      loginAvailable={loginAvailable}
      {...getJobStreetProps({ country, language })}
      brandStyles={styles}
      locales={locales}
      country={country}
      language={language}
      {...restProps}
    />
  );
};

Header.propTypes = {
  country: PropTypes.string,
  language: PropTypes.string,
  activeTab: PropTypes.string,
  loginAvailable: PropTypes.bool
};

export default Header;
