import React, { Fragment } from 'react';
import BellIcon from '../../BellIcon/BellIcon';
import styles from './NotificationsLink.less';

const NotificationsLink = ({isAuthenticated, linkRenderer, isInExperiment}) => {
  return (
    isInExperiment && isAuthenticated ? (
      <Fragment>
        {linkRenderer({
          href: '/notifications',
          children: [
            <BellIcon className={styles.bell} />
          ]
        })}
        <span className={styles.bellDivider} />
      </Fragment>
    ) : null
  );
}

export default NotificationsLink;
