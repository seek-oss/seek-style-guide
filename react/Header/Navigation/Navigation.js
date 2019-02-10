import styles from './Navigation.less';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import Badge from '../../Badge/Badge';

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

export default function Navigation({
  locale,
  linkRenderer,
  activeTab,
  newBadgeTab,
  divider
}) {
  return (
    <nav
      aria-label="Primary navigation"
      role="navigation"
      className={classnames({
        [styles.root]: true,
        [styles.divider]: divider
      })}
    >
      <ul className={styles.list} data-automation="nav-tabs">
        {items.map(
          (
            { specificLocale = locale, analytics, name, isShort, ...restProps },
            key
          ) => {
            return specificLocale === locale ? (
              <li className={styles.item} key={name}>
                {linkRenderer({
                  children: [
                    name,
                    name === newBadgeTab && (
                      <span
                        key={name}
                        className={classnames({
                          [styles.newBadge]: true,
                          [styles.newBadge_isShort]: isShort,
                          [styles.newBadge_isLast]: items.length - 1 === key
                        })}
                      >
                        &nbsp;
                        <Badge strong tone="info" children="New" />
                      </span>
                    )
                  ],
                  'data-analytics': analytics,
                  className: classnames({
                    [styles.link]: true,
                    [styles.link_isActive]: name === activeTab
                  }),
                  ...restProps
                })}
              </li>
            ) : null;
          }
        )}
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
