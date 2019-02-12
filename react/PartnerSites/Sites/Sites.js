import styles from './Sites.less';

import React from 'react';
import PropTypes from 'prop-types';

const linksObject = {
  AU: {
    jobsUrl: 'https://www.seek.com.au',
    learningUrl:
      'https://www.seek.com.au/learning/?campaigncode=seek_banner_29&sc_trk=skj-courses-link',
    businessUrl: 'https://www.seekbusiness.com.au/?tracking=sk:main:au:nav:bus',
    volunteerUrl: 'https://www.volunteer.com.au/?tracking=SKMAU:main+header'
  },
  NZ: {
    jobsUrl: 'https://www.seek.co.nz',
    learningUrl:
      'https://www.seeklearning.co.nz/?campaigncode=seek_banner_29&sc_trk=skj-courses-link',
    businessUrl:
      'https://www.seekbusiness.com.au/?site=nz&tracking=sk:main:nz:nav:bus',
    volunteerUrl: 'https://seekvolunteer.co.nz/?tracking=SKMNZ:main+header'
  }
};

const err = () => {
  const e = new Error('Link key not found');
  e.name = 'PartnerSiteError';
  throw e;
};

const localeLens = links => locale => (links ? links[locale] : err());
const linkLens = locale => link =>
  (typeof locale[link] === 'string' && locale[link]) || err();

export default function Sites({ locale, linkRenderer, activeSite }) {
  const linkView = linkLens(localeLens(linksObject)(locale));

  const isJobsActive = activeSite === 'Jobs';
  const isCoursesActive = activeSite === 'Courses';
  const isBusinessesActive = activeSite === 'Businesses for sale';
  const isVolunteeringActive = activeSite === 'Volunteering';

  return (
    <nav aria-label="SEEK sites" role="navigation">
      <ul className={styles.list}>
        <li>
          {isJobsActive ? (
            <span
              className={`${styles.link} ${styles.link_isActive}`}
              title="SEEK Jobs"
            >
              Jobs
            </span>
          ) : (
            linkRenderer({
              'data-analytics': 'header:jobs',
              className: `${styles.link} ${styles.link_isJobs}`,
              href: linkView('jobsUrl'),
              title: 'SEEK Jobs',
              children: 'Jobs'
            })
          )}
        </li>
        <li>
          {isCoursesActive ? (
            <span
              className={`${styles.link} ${styles.link_isActive}`}
              title="SEEK Learning"
            >
              Courses
            </span>
          ) : (
            linkRenderer({
              'data-analytics': 'header:courses',
              className: `${styles.link} ${styles.link_isLearning}`,
              href: linkView('learningUrl'),
              title: 'SEEK Learning',
              children: 'Courses'
            })
          )}
        </li>
        <li>
          {isBusinessesActive ? (
            <span
              className={`${styles.link} ${styles.link_isActive}`}
              title="SEEK Business"
            >
              Businesses for sale
            </span>
          ) : (
            linkRenderer({
              'data-analytics': 'header:business+for+sale',
              className: `${styles.link} ${styles.link_isBusiness}`,
              href: linkView('businessUrl'),
              title: 'SEEK Business',
              children: 'Businesses for sale'
            })
          )}
        </li>
        <li>
          {isVolunteeringActive ? (
            <span
              className={`${styles.link} ${styles.link_isActive}`}
              title="SEEK Volunteer"
            >
              Volunteering
            </span>
          ) : (
            linkRenderer({
              'data-analytics': 'header:volunteering',
              className: `${styles.link} ${styles.link_isVolunteering}`,
              href: linkView('volunteerUrl'),
              title: 'SEEK Volunteer',
              children: 'Volunteering'
            })
          )}
        </li>
      </ul>
    </nav>
  );
}

Sites.propTypes = {
  locale: PropTypes.oneOf(['AU', 'NZ']).isRequired,
  linkRenderer: PropTypes.func.isRequired,
  activeSite: PropTypes.oneOf([
    'Jobs',
    'Courses',
    'Businesses for sale',
    'Volunteering'
  ])
};

Sites.defaultProps = {
  activeSite: null
};
