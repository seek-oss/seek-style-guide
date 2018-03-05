import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { HomeIcon, SearchIcon, BookmarkIcon, HamburgerIcon } from 'seek-asia-style-guide/react';
import { ACTIVE_TAB_HOME, ACTIVE_TAB_SEARCH, ACTIVE_TAB_SAVED_JOBS } from '../../Header';
import styles from './ActionTray.less';

const actionTrayLink = ({ linkUrl, LinkIcon, activeTab, tabName, menuOpen, brandStyles }) => {
  return !menuOpen && activeTab === tabName ? (
    <LinkIcon svgClassName={classnames(styles.svg, brandStyles.activeActionTrayIcon)} />
  ) : (
    <a href={linkUrl}>
      <LinkIcon svgClassName={styles.svg} />
    </a>
  );
};

actionTrayLink.propTypes = {
  linkUrl: PropTypes.string,
  LinkIcon: PropTypes.func,
  activeTab: PropTypes.string,
  tabName: PropTypes.string,
  menuOpen: PropTypes.bool,
  brandStyles: PropTypes.object.isRequired
};

const ActionTray = ({ loginAvailable, brandStyles, messages, handleToggleMenu, activeTab, menuOpen }) => {
  return (
    <div className={styles.root}>
      <div>
        { actionTrayLink({ LinkIcon: HomeIcon, linkUrl: messages['header.homeUrl'], activeTab, tabName: ACTIVE_TAB_HOME, menuOpen, brandStyles }) }
      </div>
      <div>
        { actionTrayLink({ LinkIcon: SearchIcon, linkUrl: messages['header.searchUrl'], activeTab, tabName: ACTIVE_TAB_SEARCH, menuOpen, brandStyles }) }
      </div>
      { loginAvailable && (
        <div>
          { actionTrayLink({ LinkIcon: BookmarkIcon, linkUrl: messages['header.savedJobsUrl'], activeTab, tabName: ACTIVE_TAB_SAVED_JOBS, menuOpen, brandStyles }) }
        </div>
      )}
      <div onClick={handleToggleMenu} className={styles.menuToggle}>
        <HamburgerIcon svgClassName={classnames(styles.svg, { [brandStyles.activeActionTrayIcon]: menuOpen })} />
      </div>
    </div>
  );
};

ActionTray.propTypes = {
  loginAvailable: PropTypes.bool,
  brandStyles: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  handleToggleMenu: PropTypes.func.isRequired,
  activeTab: PropTypes.string,
  menuOpen: PropTypes.bool
};

export default ActionTray;
