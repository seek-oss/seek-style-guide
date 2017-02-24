import styles from './PartnerSites.less';

import React, { PropTypes } from 'react';
import ScreenReaderOnly from '../../Accessibility/ScreenReaderOnly';

const linksObject = {
  AU: {
    learningUrl: 'https://www.seeklearning.com.au/?campaigncode=seek_banner_29&sc_trk=skj-courses-link',
    businessUrl: 'https://www.seekbusiness.com.au/?tracking=sk:main:au:nav:bus',
    volunteerUrl: 'https://www.volunteer.com.au/?tracking=SKMAU:main+header'
  },
  NZ: {
    learningUrl: 'https://www.seeklearning.co.nz/?campaigncode=seek_banner_29&sc_trk=skj-courses-link',
    businessUrl: 'https://www.seekbusiness.com.au/?site=nz&tracking=sk:main:nz:nav:bus',
    volunteerUrl: 'https://seekvolunteer.co.nz/?tracking=SKMNZ:main+header'
  }
};

const err = () => {
  const e = new Error('Link key not found');
  e.name = 'PartnerSiteError';
  throw e;
};

const localeLens = links => locale => links ? links[locale] : err();
const linkLens = locale => link => typeof locale[link] === 'string' && locale[link] || err();

export default function PartnerSites({ locale, linkRenderer }) {
  const linkView = linkLens(localeLens(linksObject)(locale));

  return (
    <nav role="navigation" aria-labelledby="PartnerSites">

      <ScreenReaderOnly>
        <h1 id="PartnerSites">Partner Sites</h1>
      </ScreenReaderOnly>

      <ul className={styles.list}>
        <li>
          <span className={`${styles.link} ${styles.link_isJobs}`} title="SEEK Jobs">Jobs</span>
        </li>
        <li>
          {
            linkRenderer({
              'data-analytics': 'header:courses',
              className: `${styles.link} ${styles.link_isLearning}`,
              href: linkView('learningUrl'),
              title: 'SEEK Learning',
              children: 'Courses'
            })
          }
        </li>
        <li>
          {
            linkRenderer({
              'data-analytics': 'header:business+for+sale',
              className: `${styles.link} ${styles.link_isBusiness}`,
              href: linkView('businessUrl'),
              title: 'SEEK Business',
              children: 'Businesses for sale'
            })
          }
        </li>
        <li>
          {
            linkRenderer({
              'data-analytics': 'header:volunteering',
              className: `${styles.link} ${styles.link_isVolunteering}`,
              href: linkView('volunteerUrl'),
              title: 'SEEK Volunteer',
              children: 'Volunteering'
            })
          }
        </li>
      </ul>
    </nav>
  );
}

PartnerSites.propTypes = {
  locale: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired
};
