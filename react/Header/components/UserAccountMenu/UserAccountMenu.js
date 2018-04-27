import styles from './UserAccountMenu.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const isStandalone = process.env.IS_STANDALONE === 'true';

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
        if (isStandalone) {
          return <a key={index} className={styles.item} href={link.url}>{link.title}</a>;
        }
        return <Link key={index} className={styles.item} to={link.url}>{link.title}</Link>;
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
