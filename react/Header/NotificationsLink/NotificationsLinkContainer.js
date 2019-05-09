import React from 'react';
import { getCookieFromString } from './utils';
import { AUTHENTICATED } from '../../private/authStatusTypes';
import { EXPERIMENT_ID } from './constants';
import NotificationsLink from './NotificationsLink';

class NotificationsLinkContainer extends React.Component {
  state = {
    isInExperiment: false
  }

  componentDidMount() {
    let visitorId = null;

    if (typeof document !== 'undefined') {
      visitorId = getCookieFromString('JobseekerVisitorId', document.cookie);
    }
    
    try {
      if (visitorId) {
        const url = `https://experiments.cloud.seek.com.au/participants/${visitorId}`;
        
        fetch(url)
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
