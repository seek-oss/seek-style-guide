import React from 'react';
import { getCookie } from './utils';
import { AUTHENTICATED } from '../../private/authStatusTypes';
import { EXPERIMENT_ID } from './constants';
import NotificationsLink from './NotificationsLink';

class NotificationsLinkContainer extends React.Component {
  state = {
    isInExperiment: false
  }

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
    const { authenticationStatus, linkRenderer } = this.props;
    const isAuthenticated = (authenticationStatus === AUTHENTICATED);

    return (
      <NotificationsLink 
        isAuthenticated={isAuthenticated}
        isInExperiment={this.state.isInExperiment}
        linkRenderer={linkRenderer}
      />
    );
  }
}

export default NotificationsLinkContainer;
