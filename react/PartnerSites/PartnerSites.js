import styles from './PartnerSites.less';
import React from 'react';
import PropTypes from 'prop-types';

import Hidden from '../Hidden/Hidden';
import PageBlock from '../PageBlock/PageBlock';
import Locales from './Locales/Locales';
import Sites from './Sites/Sites';

const defaultLinkRenderer = props => (<a {...props} />);

export default function PartnerSites({ locale, linkRenderer, activeSite }) {
  return (<Hidden component={PageBlock} print mobile className={styles.root}>
    <div className={styles.content}>
      <Sites locale={locale} linkRenderer={linkRenderer} activeSite={activeSite} />
      <div className={styles.locale}>
        <Locales locale={locale} linkRenderer={linkRenderer} />
      </div>
    </div>
  </Hidden>);
}

PartnerSites.displayName = 'PartnerSites';

PartnerSites.propTypes = {
  locale: PropTypes.oneOf(['AU', 'NZ']),
  linkRenderer: PropTypes.func,
  activeSite: PropTypes.oneOf(['Jobs', 'Courses', 'Businesses for sale', 'Volunteering'])
};

PartnerSites.defaultProps = {
  locale: 'AU',
  linkRenderer: defaultLinkRenderer,
  activeSite: null
};
