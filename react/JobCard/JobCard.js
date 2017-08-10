import React from 'react';
import Text from '../Text/Text';
import Card from '../Card/Card';
import Section from '../Section/Section';

import styles from './JobCard.css';

const JobCard = (props) => {

  console.log(styles);

  return (
      <Card className={styles.root}>
        <Section>
          <Text>Company name</Text>
          <Text heading>Job Title</Text>
        </Section>
        <Section>
          <Text>Location</Text>
          <Text>Salary</Text>
          <Text>Posting duration</Text>
        </Section>
      </Card>
  )
};

export default JobCard;
