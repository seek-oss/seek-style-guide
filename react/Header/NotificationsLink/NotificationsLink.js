import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BellIcon from '../../BellIcon/BellIcon';
import styles from './NotificationsLink.less';

const NotificationsLink = ({
  isAuthenticated,
  linkRenderer,
  isInExperiment
}) => {
  return isInExperiment && isAuthenticated ? (
    <Fragment>
      {linkRenderer({
        href: '/notifications',
        children: <BellIcon className={styles.bell} />
      })}
      <span className={styles.bellDivider} />
    </Fragment>
  ) : null;
};

NotificationsLink.propTypes = {
  isAuthenticated: PropTypes.bool,
  linkRenderer: PropTypes.func,
  isInExperiment: PropTypes.bool
};

export default NotificationsLink;
