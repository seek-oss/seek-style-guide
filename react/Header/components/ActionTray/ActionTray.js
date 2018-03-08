import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { HomeIcon, SearchIcon, BookmarkIcon, HamburgerIcon } from 'seek-asia-style-guide/react';
import { ACTIVE_TAB_HOME, ACTIVE_TAB_SEARCH, ACTIVE_TAB_SAVED_JOBS } from '../../Header';
import styles from './ActionTray.less';

const actionTrayLink = ({ linkUrl, LinkIcon, activeTab, tabName, menuOpen, brandStyles, showFlag, handleToggleMenu }) => {
  if (showFlag) {
    return activeTab === tabName ? (
      <div
        onClick={(menuOpen && activeTab === tabName) ? handleToggleMenu : undefined} // eslint-disable-line no-undefined
        className={menuOpen ? styles.menuToggle : styles.actionTrayTab}>
        <LinkIcon
          svgClassName={classnames(styles.svg, {
            [brandStyles.activeActionTrayIcon]: !menuOpen
          })}
        />
      </div>
    ) : (
      <div className={styles.actionTrayTab}>
        <a href={linkUrl} className={styles.actionTrayLink}>
          <LinkIcon svgClassName={styles.svg} />
        </a>
      </div>
    );
  }
  return null;
};

actionTrayLink.propTypes = {
  linkUrl: PropTypes.string,
  LinkIcon: PropTypes.func,
  activeTab: PropTypes.string,
  tabName: PropTypes.string,
  menuOpen: PropTypes.bool,
  showFlag: PropTypes.bool.isRequired,
  brandStyles: PropTypes.object.isRequired,
  handleToggleMenu: PropTypes.func
};

const ActionTray = ({ loginAvailable, brandStyles, messages, handleToggleMenu, activeTab, menuOpen, showTray = true, showHome = true, showSearch = true, showSavedJobs = true, showMenu = true }) => {
  const actionTrayLinkProps = {
    brandStyles,
    activeTab,
    menuOpen,
    handleToggleMenu
  };

  if (showTray) {
    return (
      <div className={styles.root}>
        { actionTrayLink({ showFlag: showHome, LinkIcon: HomeIcon, linkUrl: messages['header.homeUrl'], tabName: ACTIVE_TAB_HOME, ...actionTrayLinkProps }) }
        { actionTrayLink({ showFlag: showSearch, LinkIcon: SearchIcon, linkUrl: messages['header.searchUrl'], tabName: ACTIVE_TAB_SEARCH, ...actionTrayLinkProps }) }
        { loginAvailable &&
            actionTrayLink({ showFlag: showSavedJobs, LinkIcon: BookmarkIcon, linkUrl: messages['header.savedJobsUrl'], tabName: ACTIVE_TAB_SAVED_JOBS, ...actionTrayLinkProps })
        }
        { showMenu && (
          <div onClick={handleToggleMenu} className={styles.menuToggle}>
            <HamburgerIcon svgClassName={classnames(styles.svg, { [brandStyles.activeActionTrayIcon]: menuOpen })} />
          </div>
        )}
      </div>
    );
  }
  return null;
};

ActionTray.propTypes = {
  loginAvailable: PropTypes.bool,
  brandStyles: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  handleToggleMenu: PropTypes.func.isRequired,
  activeTab: PropTypes.string,
  menuOpen: PropTypes.bool,
  showTray: PropTypes.bool,
  showHome: PropTypes.bool,
  showSearch: PropTypes.bool,
  showSavedJobs: PropTypes.bool,
  showMenu: PropTypes.bool
};

export default ActionTray;
