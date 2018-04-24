import styles from './UserAccountMenu.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserAccountMenu extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const {
      userAccMenuItems
    } = this.props;

    if (userAccMenuItems && userAccMenuItems.map) {
      const tmp = userAccMenuItems.map((link, index) => {
        return <li key={index} className={styles.item} href={link.url}>{link.title}</li>;
      });

      return (
        <ul className={styles.root}>
          {tmp}
        </ul>
      );
    }
    return null;
  }
}

UserAccountMenu.propTypes = {
  userAccMenuItems: PropTypes.array.isRequired
};
