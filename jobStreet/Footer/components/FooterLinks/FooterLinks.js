import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import styles from './FooterLinks.less';

const FooterLinks = ({ intl }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href={intl.formatMessage({ id: 'footer.link' })}>
          <FormattedMessage id="footer.linkText" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={intl.formatMessage({ id: 'footer.siteMapLink' })}>
          <FormattedMessage id="footer.siteMapLinkText" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={intl.formatMessage({ id: 'footer.aboutLink' })}>
          <FormattedMessage id="footer.aboutLinkText" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={intl.formatMessage({ id: 'footer.profilesLink' })}>
          <FormattedMessage id="footer.profilesLinkText" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={intl.formatMessage({ id: 'footer.termsLink' })}>
          <FormattedMessage id="footer.termsLinkText" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={intl.formatMessage({ id: 'footer.privacyLink' })}>
          <FormattedMessage id="footer.privacyLinkText" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={intl.formatMessage({ id: 'footer.safeLink' })}>
          <FormattedMessage id="footer.safeLinkText" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={intl.formatMessage({ id: 'footer.helpLink' })}>
          <FormattedMessage id="footer.helpLinkText" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={intl.formatMessage({ id: 'footer.feedbackLink' })}>
          <FormattedMessage id="footer.feedbackLinkText" />
        </a>
      </li>
    </ul>
  )
};

FooterLinks.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(FooterLinks);