import styles from './PartnerSites.less';
import React from 'react';
import PropTypes from 'prop-types';

import Hidden from '../Hidden/Hidden';
import PageBlock from '../PageBlock/PageBlock';
import Locales from './Locales/Locales';
import Products from './Products/Products';

const defaultLinkRenderer = props => (<a {...props} />);

export default function PartnerSites({ locale, linkRenderer, activeProduct }) {
  return (<Hidden component={PageBlock} print mobile className={styles.root}>
    <div className={styles.content}>
      <Products locale={locale} linkRenderer={linkRenderer} activeProduct={activeProduct} />
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
  activeProduct: PropTypes.oneOf(['Jobs', 'Courses', 'Businesses for sale', 'Volunteering'])
};

PartnerSites.defaultProps = {
  locale: 'AU',
  linkRenderer: defaultLinkRenderer,
  activeProduct: null
};
