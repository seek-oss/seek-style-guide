import styles from './Navigation.less';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';
import NewBadge from '../NewBadge/NewBadge';

const items = [
  {
    name: 'Job Search',
    href: '/',
    analytics: 'header:jobs'
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
    analytics: 'header:profile',
    isShort: true
  },
  {
    name: 'Company Reviews',
    href: '/companies/',
    analytics: 'header:companies',
    specificLocale: 'AU'
  },
  {
    name: 'Career Advice',
    href: '/career-advice/',
    analytics: 'header:advice'
  }
];

export default function Navigation({ locale, linkRenderer, activeTab, newBadgeTab, divider }) {
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
        {
          items.map(({ specificLocale = locale, analytics, name, isShort, ...restProps }, i) => {
            const badgeStyles = classnames({
              [styles.newBadge]: true,
              [styles.newBadge_isShort]: isShort
            });

            return (
              (specificLocale === locale) ?
                <li className={styles.item} key={i}>
                  {
                    linkRenderer({
                      children: [
                        name === 'Career Advice' && locale === 'NZ' ? 'Advice & Tips' : name,
                        name === newBadgeTab && (
                          <NewBadge
                            key={name}
                            className={badgeStyles}
                          />
                        )
                      ],
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
            );
          })
        }
      </ul>

    </nav>
  );
}

Navigation.propTypes = {
  locale: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  divider: PropTypes.bool.isRequired,
  activeTab: PropTypes.string,
  newBadgeTab: PropTypes.string
};

Navigation.defaultProps = {
  activeTab: null,
  newBadgeTab: null
};
