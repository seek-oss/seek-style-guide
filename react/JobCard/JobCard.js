import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text/Text';
import Card from '../Card/Card';
import Section from '../Section/Section';
import PageBlock from '../PageBlock/PageBlock';
import HeartIcon from '../HeartIcon/HeartIcon'

import styles from './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <Card className={styles.root}>
      <Section>
        <Text>{job.company}</Text>
        <Text heading>{job.jobTitle}</Text>
      </Section>
      { job.description && (
          <Section className={styles.bodyDescription}>
            <Text>{job.description}</Text>
          </Section>
      )}
      <Section>
        <Text className={styles.location}><HeartIcon /> {job.location}</Text>
        <div className={styles.footer}>
          <Text className={styles.salary}>{ job.salary }</Text>
          <Text className={styles.postingDuration}>{job.postingDuration}</Text>
        </div>
      </Section>
    </Card>
  )
};

export default JobCard;

JobCard.propTypes = {
    job: PropTypes.shape({
        jobTitle: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        description: PropTypes.string,
        location: PropTypes.string.isRequired,
        postingDuration: PropTypes.string.isRequired
    }).isRequired
};