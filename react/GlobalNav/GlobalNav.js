import styles from './GlobalNav.less';
import React from 'react';
import PropTypes from 'prop-types';

import Hidden from '../Hidden/Hidden';
import Locales from './Locales/Locales';
import PartnerSites from './PartnerSites/PartnerSites';

export default function GlobalNav({ locale, linkRenderer, hideLocales, activePartnerSite }) {
  return (<Hidden print mobile className={styles.root}>
    <div className={styles.content}>
      <PartnerSites locale={locale} linkRenderer={linkRenderer} activePartnerSite={activePartnerSite} />
      {!hideLocales && (
        <div className={styles.locale}>
          <Locales locale={locale} linkRenderer={linkRenderer} />
        </div>
      )}
    </div>
  </Hidden>);
}

GlobalNav.displayName = 'GlobalNav';

GlobalNav.propTypes = {
  locale: PropTypes.oneOf(['AU', 'NZ']).isRequired,
  linkRenderer: PropTypes.func.isRequired,
  hideLocales: PropTypes.bool,
  activePartnerSite: PropTypes.oneOf(['jobs', 'courses', 'businesses', 'volunteering'])
};

GlobalNav.defaultProps = {
  hideLocales: false,
  activePartnerSite: null
};
