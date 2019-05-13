import React from 'react';
import PropTypes from 'prop-types';
import { getCookieFromString } from './utils';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_PENDING
} from '../../private/authStatusTypes';
import { EXPERIMENT_ID, AB_CRUNCH_URL } from './constants';
import NotificationsLink from './NotificationsLink';

class NotificationsLinkContainer extends React.Component {
  static propTypes = {
    authenticationStatus: PropTypes.oneOf([
      AUTHENTICATED,
      UNAUTHENTICATED,
      AUTH_PENDING
    ]),
    linkRenderer: PropTypes.func
  };

  state = {
    isInExperiment: false
  };

  componentDidMount() {
    let visitorId = null;

    try {
      if (typeof document !== 'undefined') {
        visitorId = getCookieFromString('JobseekerVisitorId', document.cookie);
      }
      if (visitorId) {
        const url = `${AB_CRUNCH_URL}/${visitorId}`;

        fetch(url)
          .then(response => response.json())
          .then(response => {
            const isInExperiment = Boolean(response.experiments[EXPERIMENT_ID]);

            if (isInExperiment) {
              this.setState({ isInExperiment: true });
            }
          })
          .catch(() => {});
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }

  render() {
    const { authenticationStatus, linkRenderer } = this.props;
    const isAuthenticated = authenticationStatus === AUTHENTICATED;

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
