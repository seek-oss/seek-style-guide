import styles from './Navigation.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';

const items = [
  {
    name: 'Job Search',
    shortName: 'Jobs',
    href: '/',
    analytics: 'header:jobs',
    isSearch: true
  },
  {
    name: '$150k+ Jobs',
    'aria-label': 'One fifty K jobs',
    href: '/150kjobs',
    analytics: 'header:high+salary',
    specificLocale: 'AU'
  },
  {
    name: 'Profile',
    href: '/profile/',
    analytics: 'header:profile'
  },
  {
    name: 'Company Reviews',
    shortName: 'Companies',
    href: '/companies/',
    analytics: 'header:companies',
    specificLocale: 'AU',
    isSearch: true
  },
  {
    name: 'Advice & Tips',
    href: '/career-advice/',
    analytics: 'header:advice'
  }
];

export default function Navigation({ locale, linkRenderer, activeTab, divider }) {
  return (
    <nav
      aria-labelledby="MainNavigation"
      role="navigation"
      className={classnames({
        [styles.root]: true,
        [styles.divider]: divider
      })}>

      <ScreenReaderOnly>
        <h1 id="MainNavigation">Primary Links</h1>
      </ScreenReaderOnly>

      <ul className={styles.list} data-automation="nav-tabs">
        { items.map(({ specificLocale = locale, analytics, name, shortName, isSearch, ...restProps }, i) => (
            (specificLocale === locale) ?
              <li
                className={classnames({
                  [styles.item]: true,
                  [styles.item_isSearch]: isSearch
                })}
                key={i}>
                {
                  linkRenderer({
                    children: isSearch ? shortName : name, // Need to show short name only on small device
                    'data-analytics': analytics,
                    className: classnames({
                      [styles.link]: true,
                      [styles.link_isActive]: name === activeTab
                    }),
                    ...restProps
                  })
                }
              </li> :
              null
          ))
        }
      </ul>

    </nav>
  );
}

Navigation.propTypes = {
  locale: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  divider: PropTypes.bool.isRequired,
  activeTab: PropTypes.oneOf(items.map(({ name }) => name))
};

Navigation.defaultProps = {
  activeTab: null
};
