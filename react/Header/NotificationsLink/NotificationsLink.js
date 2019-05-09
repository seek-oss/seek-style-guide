import React, { Fragment } from 'react';
import BellIcon from '../../BellIcon/BellIcon';
import styles from './NotificationsLink.less';
import { getCookie } from './utils';
import { AUTHENTICATED } from '../../private/authStatusTypes';
import { EXPERIMENT_ID } from './constants';

class NotificationsLink extends React.Component {
  componentDidMount() {
    const visitorId = getCookie('JobseekerVisitorId');
    const url = `http://experiments-api.candidate.prod.outfra.xyz/participants/${visitorId}`;

    try {
      if (visitorId) {
        fetch(url) // Call the fetch function passing the url of the API as a parameter
          .then(response => response.json())
          .then((response) => {
            const isInExperiment = Boolean(response.experiments[EXPERIMENT_ID]);

            if (isInExperiment) {
              this.setState({isInExperiment: true})
            }
          });
      }
    } catch (e) {}
  }

  render() {
    const { isAuthenticated, linkRenderer, isInExperiment } = this.props;

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
}

export default NotificationsLink;
