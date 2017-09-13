import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import styles from './footer.less';
import PropTypes from 'prop-types';

import FooterLinks from './components/FooterLinks/FooterLinks';
import localization from './localization';

const Footer = ({ language, country }) => {
    const year = new Date().getFullYear();
    const messages = localization[`${language}-${country}`];

    return (
      <IntlProvider locale={language} messages={messages}>
          <footer className={styles.container}>
            <FooterLinks />
            <p className={styles.copyright}><FormattedMessage id="footer.copyright" values={{ year }} /></p>
          </footer>
      </IntlProvider>
    );
};

Footer.PropTypes = {
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default Footer;
