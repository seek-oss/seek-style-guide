import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text/Text';
import Card from '../Card/Card';
import Section from '../Section/Section';
import LocationIcon from '../LocationIcon/LocationIcon';
import MoneyIcon from '../MoneyIcon/MoneyIcon';
import TimeIcon from '../TimeIcon/TimeIcon';
import styles from './JobCard.less';

const JobCard = ({ job }) => {
  return (
    <Card className={styles.root}>
      <Section>
        <h2 className={styles.company}>
          {job.classified && (<span className={styles.greyLabel}>Classifieds</span>)}
          {job.company ? job.company : <span className={styles.greyLabel}>Company Confidential</span>}
        </h2>
        <h1 className={styles.jobTitle}>{job.jobTitle}</h1>
      </Section>
      <Section className={styles.bodyDescription}>
        {job.sellingPoints && (
          <ul className={styles.sellingPoints}>
            {job.sellingPoints.map(function (item, i) { return <li key={i}>{item}</li> })}
          </ul>
        )}
        <p className={styles.bodyDescriptionText}>{job.description}</p>
      </Section>
      <Section className={styles.footer}>
        <div className={styles.footerInfo}>
          <p><LocationIcon /> {job.location}</p>
          <p><MoneyIcon /> {job.salary}</p>
          <p>{job.postingDuration}</p>
        </div>
        {job.companyLogoUrl && (
          <div className={styles.companyLogoWrapper}>
            <img className={styles.companyLogo} src={job.companyLogoUrl} />
          </div>
        )}
      </Section>
    </Card>
  );
};

export default JobCard;
JobCard.propTypes = {
  job: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    companyLogoUrl: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string.isRequired,
    postingDuration: PropTypes.string.isRequired,
    classified: PropTypes.bool,
    sellingPoints: PropTypes.array
  }).isRequired
};
