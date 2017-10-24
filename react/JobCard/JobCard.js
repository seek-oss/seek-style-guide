import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Text from '../Text/Text';
import Card from '../Card/Card';
import Section from '../Section/Section';
import LocationIcon from '../LocationIcon/LocationIcon';
import MoneyIcon from '../MoneyIcon/MoneyIcon';
import styles from './JobCard.less';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const JobCard = ({ job, keyword = '' }) => {
  let title = <Text regular yelling className={styles.positionTitle}>{job.jobTitle}</Text>;
  if (keyword) {
    const matches = match(job.jobTitle, keyword);
    const parts = parse(job.jobTitle, matches);
    title = (
      <div>
        {
          parts.map((part, index) => {
            const className = classnames({ [styles.positionTitle]: true, [styles.highlight]: part.highlight });
            return (
              <Text regular={!part.highlight} yelling className={className} key={index}>{part.text}</Text>
            );
          })
        }
      </div>
    );
  }
  return (
    <Card className={styles.root}>
      <Section>
        <Text whispering className={styles.company}>
          {job.featuredLabel && (<span className={styles.featuredLabel}>{job.featuredLabel}</span>)}
          {job.classifiedLabel && (<span className={styles.classifiedLabel}>{job.classifiedLabel}</span>)}
          {job.confidentialLabel && (<span className={styles.confidentialLabel}>{job.confidentialLabel}</span>)}
          {job.company}
        </Text>
        {title}
      </Section>
      {job.sellingPoints &&
        <Section className={styles.sellingPointsSection} >
          <ul className={styles.sellingPointsList} >
            {job.sellingPoints.map((sellingPoint, i) => {
              return (
                <li key={i}><Text whispering className={styles.sellingPoint}>{sellingPoint}</Text></li>
              );
            })}
          </ul>
        </Section>
      }
      { job.description && (
        <Section className={styles.jobDescriptionSection}>
          <Text whispering className={styles.bodyDescriptionText}>{job.description}</Text>
        </Section>
      )}
      <Section className={styles.footerSection}>
        <div className={styles.footerLeft}>
          <div className={styles.jobInfoList}>
            <div>
              <Text whispering className={styles.jobInfo}><LocationIcon /> {job.location}</Text>
              { job.salary && (<Text whispering className={styles.jobInfo}><MoneyIcon /> {job.salary}</Text>)}
            </div>
            <Text whispering className={styles.postingDuration}>{job.postingDuration}</Text>
          </div>
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
  keyword: PropTypes.string,
  job: PropTypes.shape({
    company: PropTypes.string,
    jobTitle: PropTypes.string.isRequired,
    jobUrl: PropTypes.string.isRequired,
    sellingPoints: PropTypes.arrayOf(PropTypes.string),
    companyLogoUrl: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string,
    postingDuration: PropTypes.string.isRequired,
    featuredLabel: PropTypes.string,
    classifiedLabel: PropTypes.string,
    confidentialLabel: PropTypes.string
  }).isRequired
};
