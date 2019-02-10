import styles from './Locales.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Locales({ locale, linkRenderer, localeLinks }) {
  const isAU = locale === 'AU';
  const isNZ = locale === 'NZ';

  const listClasses = classnames({
    [styles.list]: true,
    [styles.list_isNZ]: isNZ
  });

  return (
    <nav aria-label="country" role="navigation" className={styles.root}>
      <ul className={listClasses}>
        <li className={styles.listItem}>
          {isAU ? (
            <span className={styles.locale_isActive}>AU</span>
          ) : (
            linkRenderer({
              className: styles.localeLink,
              children: 'AU',
              ...localeLinks.AU
            })
          )}
        </li>
        <li className={styles.listItem}>
          {isNZ ? (
            <span className={styles.locale_isActive}>NZ</span>
          ) : (
            linkRenderer({
              className: styles.localeLink,
              children: 'NZ',
              ...localeLinks.NZ
            })
          )}
        </li>
      </ul>
    </nav>
  );
}

const localeLink = PropTypes.shape({
  'data-analytics': PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

Locales.propTypes = {
  locale: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  localeLinks: PropTypes.shape({
    AU: localeLink.isRequired,
    NZ: localeLink.isRequired
  }).isRequired
};
