import React from 'react';
import BellIcon from '../../BellIcon/BellIcon';
import styles from './NotificationsLink.less';

class NotificationsLink extends React.Component {
  componentDidMount() {
    const visitorId = '12302983201938018';
    const url = `http://experiments-api.candidate.prod.outfra.xyz/participants/${visitorId}`;
    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then(() => {
          // Your code for handling the data you get from the API
      })
  }

  render() { 
    return (
      <BellIcon className={styles.bell} />
    );
  }
}
 
export default NotificationsLink;
