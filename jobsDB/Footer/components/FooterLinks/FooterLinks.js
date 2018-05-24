import React from 'react';
import PropTypes from 'prop-types';

import styles from './FooterLinks.less';

const FooterLinks = ({ messages }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.itemMobile}>
        <a className={styles.link} href={messages['footer.legalLink']} rel="nofollow">
          {messages['footer.legalLinkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.privacyLink']} rel="nofollow">
          {messages['footer.privacyLinkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.termsLink']} rel="nofollow">
          {messages['footer.termsLinkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.siteMapLink']}>
          {messages['footer.siteMapLinkText']}
        </a>
      </li>
    </ul>
  );
};

FooterLinks.propTypes = {
  messages: PropTypes.object.isRequired
};

export default FooterLinks;
