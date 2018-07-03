import styles from './PartnerSites.less';

import React from 'react';
import PropTypes from 'prop-types';

import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';

const linksObject = {
  AU: {
    jobsUrl: 'https://www.seek.com.au',
    learningUrl: 'https://www.seek.com.au/learning/?campaigncode=seek_banner_29&sc_trk=skj-courses-link',
    businessUrl: 'https://www.seekbusiness.com.au/?tracking=sk:main:au:nav:bus',
    volunteerUrl: 'https://www.volunteer.com.au/?tracking=SKMAU:main+header'
  },
  NZ: {
    jobsUrl: 'https://www.seek.co.nz',
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

export default function PartnerSites({ locale, linkRenderer, activePartnerSite }) {
  const linkView = linkLens(localeLens(linksObject)(locale));

  const isJobsActive = activePartnerSite === 'jobs';
  const isCoursesActive = activePartnerSite === 'courses';
  const isBusinessesActive = activePartnerSite === 'businesses';
  const isVolunteeringActive = activePartnerSite === 'volunteering';

  return (
    <nav role="navigation" aria-labelledby="PartnerSites">

      <ScreenReaderOnly>
        <h1 id="PartnerSites">Partner Sites</h1>
      </ScreenReaderOnly>

      <ul className={styles.list}>
        <li>
          {isJobsActive ?
            <span className={`${styles.link} ${styles.link_isActive}`} title="SEEK Jobs">Jobs</span> :
            linkRenderer({
              'data-analytics': 'header:jobs',
              className: `${styles.link} ${styles.link_isJobs}`,
              href: linkView('jobsUrl'),
              title: 'SEEK Jobs',
              children: 'Jobs'
            })
          }
        </li>
        <li>
          {isCoursesActive ?
            <span className={`${styles.link} ${styles.link_isActive}`} title="SEEK Learning">Courses</span> :
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
          {isBusinessesActive ?
            <span className={`${styles.link} ${styles.link_isActive}`} title="SEEK Business">Businesses for sale</span> :
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
          {isVolunteeringActive ?
            <span className={`${styles.link} ${styles.link_isActive}`} title="SEEK Volunteer">Volunteering</span> :
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
  locale: PropTypes.oneOf(['AU', 'NZ']).isRequired,
  linkRenderer: PropTypes.func.isRequired,
  activePartnerSite: PropTypes.oneOf(['jobs', 'courses', 'businesses', 'volunteering']).isRequired
};
