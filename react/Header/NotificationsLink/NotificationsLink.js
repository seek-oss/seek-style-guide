import React, { Fragment } from 'react';
import BellIcon from '../../BellIcon/BellIcon';
import styles from './NotificationsLink.less';
import { getCookie } from './utils';
import { AUTHENTICATED } from '../../private/authStatusTypes';
class NotificationsLink extends React.Component {
  state = {
    showBell: false
  }

  componentDidMount() {
    const EXPERIMENT_ID = '58CC4E12-A4E0-4C0B-BD2A-681FD98FDC2E';
    const visitorId = getCookie('JobseekerVisitorId');
    const url = `http://experiments-api.candidate.prod.outfra.xyz/participants/${visitorId}`;

    try {
      if (visitorId) {
        fetch(url) // Call the fetch function passing the url of the API as a parameter
          .then(response => response.json())
          .then((response) => {
            const isInExperiment = Boolean(response.experiments[EXPERIMENT_ID]);
            console.log('response', response);
            if (isInExperiment) {
              this.setState({showBell: true})
            }
          });
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { authenticationStatus } = this.props;
    const isAuthenticated = (authenticationStatus === AUTHENTICATED);

    return (
      this.state.showBell && isAuthenticated ? (
        <Fragment>
          <BellIcon className={styles.bell} />
          <span className={styles.bellDivider} />
        </Fragment>
      ) : null
    );
  }
}

export default NotificationsLink;
