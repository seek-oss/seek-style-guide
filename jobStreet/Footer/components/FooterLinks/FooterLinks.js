import React from 'react';
import PropTypes from 'prop-types';

import styles from './FooterLinks.less';

const FooterLinks = ({ messages }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.link']}>
          {messages['footer.linkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.siteMapLink']}>
          {messages['footer.siteMapLinkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.aboutLink']}>
          {messages['footer.aboutLinkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.profilesLink']}>
          {messages['footer.profilesLinkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.termsLink']}>
          {messages['footer.termsLinkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.privacyLink']}>
          {messages['footer.privacyLinkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.safeLink']}>
          {messages['footer.safeLinkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.helpLink']}>
          {messages['footer.helpLinkText']}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={messages['footer.feedbackLink']}>
          {messages['footer.feedbackLinkText']}
        </a>
      </li>
    </ul>
  );
};

FooterLinks.propTypes = {
  messages: PropTypes.object.isRequired
};

export default FooterLinks;
