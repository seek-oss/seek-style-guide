import React from 'react';
import styles from './footer.less';
import PropTypes from 'prop-types';

import FooterLinks from './components/FooterLinks/FooterLinks';
import localization from '../localization';

const Footer = ({ language, country }) => {
  const year = new Date().getFullYear();
  const messages = localization[`${language}-${country}`];

  return (
    <footer className={styles.container}>
      <FooterLinks messages={messages} />
      <p className={styles.copyright}>
        {messages['footer.copyright'].replace('{year}', year)}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default Footer;
