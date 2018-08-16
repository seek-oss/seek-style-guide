import styles from './PartnerSites.less';
import React from 'react';
import PropTypes from 'prop-types';

import Hidden from '../Hidden/Hidden';
import PageBlock from '../PageBlock/PageBlock';
import Locales from './Locales/Locales';
import Sites from './Sites/Sites';

const defaultLinkRenderer = props => <a {...props} />;

export default function PartnerSites({
  locale,
  linkRenderer,
  activeSite,
  localeLinks
}) {
  return (
    <Hidden component={PageBlock} print mobile className={styles.root}>
      <div className={styles.content}>
        <Sites
          locale={locale}
          linkRenderer={linkRenderer}
          activeSite={activeSite}
        />
        <div className={styles.locale}>
          <Locales
            locale={locale}
            linkRenderer={linkRenderer}
            localeLinks={localeLinks}
          />
        </div>
      </div>
    </Hidden>
  );
}

PartnerSites.displayName = 'PartnerSites';

const localeLink = PropTypes.shape({
  'data-analytics': PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

PartnerSites.propTypes = {
  locale: PropTypes.oneOf(['AU', 'NZ']),
  linkRenderer: PropTypes.func,
  activeSite: PropTypes.oneOf([
    'Jobs',
    'Courses',
    'Businesses for sale',
    'Volunteering'
  ]),
  localeLinks: PropTypes.shape({
    AU: localeLink.isRequired,
    NZ: localeLink.isRequired
  })
};

PartnerSites.defaultProps = {
  locale: 'AU',
  linkRenderer: defaultLinkRenderer,
  activeSite: null,
  localeLinks: {
    AU: {
      'data-analytics': 'header:au+homepage',
      href: 'https://www.seek.com.au',
      title: 'SEEK Australia'
    },
    NZ: {
      'data-analytics': 'header:nz+homepage',
      href: 'https://www.seek.co.nz',
      title: 'SEEK New Zealand'
    }
  }
};
