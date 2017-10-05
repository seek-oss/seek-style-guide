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
        <Text small className={styles.company}>
          {job.pinkLabel && (<span className={styles.pinkLabel}>{job.pinkLabel}</span>)}
          {job.greyLabel && (<span className={styles.greyLabel}>{job.greyLabel}</span>)}
          {job.company}
        </Text>
        <Text heading className={styles.positionTitle}>{job.jobTitle}</Text>
      </Section>
      { job.sellingPoints && 
        <Section className={styles.sellingPointsSection}> 
          <ul className={styles.sellingPoints}>
            {job.sellingPoints.map((sellingPoint, i) => {return (
              <li key={i}><Text small>{sellingPoint}</Text></li>
            );})}
          </ul>
        </Section>
      }
      { job.description && (
        <Section className={styles.jobDescriptionSection}>
          <Text small className={styles.bodyDescriptionText}>{job.description}</Text>
        </Section>
      )}
      <Section className={styles.footerSection}>
        <div className={styles.jobInfo}>
          <Text small><LocationIcon /> {job.location}</Text>
          { job.salary && (<Text small><MoneyIcon /> {job.salary}</Text>)}
          <Text small className={styles.postingDuration}>{job.postingDuration}</Text>
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
    company: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    jobUrl: PropTypes.string.isRequired,
    sellingPoints: PropTypes.arrayOf(PropTypes.string),
    companyLogoUrl: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string,
    postingDuration: PropTypes.string.isRequired,
    greyLabel: PropTypes.string,
    pinkLabel: PropTypes.string
  }).isRequired
};
