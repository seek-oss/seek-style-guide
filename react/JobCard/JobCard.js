import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text/Text';
import Card from '../Card/Card';
import Section from '../Section/Section';
import LocationIcon from '../LocationIcon/LocationIcon';
import MoneyIcon from '../MoneyIcon/MoneyIcon';
import TimeIcon from '../TimeIcon/TimeIcon';
import styles from './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <Card className={styles.root}>
      <Section>
        <Text intimate className={styles.company}>{job.company}</Text>
        <Text yelling>{job.jobTitle}</Text>
      </Section>
      { job.description && (
        <Section className={styles.bodyDescription}>
          <Text intimate>{job.description}</Text>
        </Section>
      )}
      <Section className={styles.footer}>
        <div>
          <Text intimate><LocationIcon /> {job.location}</Text>
          <Text intimate><MoneyIcon /> {job.salary}</Text>
          <Text intimate><TimeIcon /> {job.postingDuration}</Text>
        </div>
        { job.companyLogoUrl && (
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
    postingDuration: PropTypes.string.isRequired
  }).isRequired
};
