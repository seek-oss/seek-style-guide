import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.less';
import { Header as GlobalHeader } from 'seek-asia-style-guide/react';
import Logo from '../Logo/Logo';
import { HomeIcon, PortalIcon, LightbulbIcon, ResourcesIcon, JobFunctionIcon, ProfileIcon } from 'seek-asia-style-guide/react';
import { getLocalization, locales } from '../localization';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../../react/private/authStatusTypes';

const getJobsDBProps = ({ country, language, loginAvailable, authenticationStatus, userName }) => {
  const messages = getLocalization({ country, language });

  const links = [
    { title: messages['header.homeTitle'], url: messages['header.homeUrl'], ItemIcon: HomeIcon },
    { title: messages['header.myJobsDBTitle'], url: messages['header.myJobsDBUrl'], ItemIcon: PortalIcon },
    { title: messages['header.resourcesTitle'], url: messages['header.resourcesUrl'], ItemIcon: ResourcesIcon },
    { title: messages['header.careerInsightsTitle'], url: messages['header.careerInsightsUrl'], ItemIcon: LightbulbIcon }
  ];

  let btns, rightLinks;
  if (loginAvailable) {
    if (authenticationStatus === UNAUTHENTICATED) {
      btns = [
        { title: messages['header.loginTitle'], url: messages['header.loginUrl'], ItemIcon: ProfileIcon, btnColor: 'secondary' },
        { title: messages['header.signupTitle'], url: messages['header.signupUrl'], ItemIcon: JobFunctionIcon, btnColor: 'callToAction' }
      ];
    } else if (authenticationStatus === AUTHENTICATED) {
      rightLinks = [
        { title: userName, dropDown: [
          { title: messages['header.profileTitle'], url: messages['header.profileUrl'], ItemIcon: ProfileIcon },
          { title: messages['header.invitationTitle'], url: messages['header.invitationUrl'], ItemIcon: JobFunctionIcon }
        ] }
      ];
    }
  }

  return {
    rightLinks,
    btns,
    links,
    messages
  };
};

const Header = ({ country = 'hk', language = 'en', activeTab, loginAvailable = false, selectCountry = true, authenticationStatus = UNAUTHENTICATED, userName, ...restProps }) => {
  return (
    <GlobalHeader
      LogoComponent={Logo}
      activeTab={activeTab}
      loginAvailable={loginAvailable}
      {...getJobsDBProps({ country, language, loginAvailable, authenticationStatus, userName })}
      brandStyles={styles}
      locales={locales}
      country={country}
      language={language}
      employerSite={true || !loginAvailable} //TO DO: logic to be confirmed by UX
      selectCountry={selectCountry}
      {...restProps}
    />
  );
};

Header.propTypes = {
  country: PropTypes.string,
  language: PropTypes.string,
  activeTab: PropTypes.string,
  loginAvailable: PropTypes.bool,
  selectCountry: PropTypes.bool,
  authenticationStatus: PropTypes.oneOf([
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_PENDING
  ]),
  userName: PropTypes.string
};

export default Header;
