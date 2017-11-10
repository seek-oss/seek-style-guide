import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text/Text';
import Card from '../Card/Card';
import Section from '../Section/Section';
import LocationIcon from '../LocationIcon/LocationIcon';
import MoneyIcon from '../MoneyIcon/MoneyIcon';
import styles from './JobCard.less';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const getParts = (text, query) => {
  if (!text || !query) {
    return null;
  }
  const matches = match(text, query);
  // No point to parse if matches is empty array
  if (matches.length === 0) {
    return null;
  }
  return parse(text, matches);
};

const JobCard = ({ job, keyword = '' }) => {
  let title = <Text className={styles.positionTitle}>{job.jobTitle}</Text>;
  let company = job.company;
  const keywordParts = getParts(job.jobTitle, keyword);
  const companyParts = getParts(company, keyword);
  if (keywordParts) {
    title = (
      <div>
        {
          keywordParts.map((part, index) => {
            return (
              <Text
                strong={part.highlight}
                className={styles.positionTitle}
                key={index}>
                {part.text}
              </Text>
            );
          })
        }
      </div>
    );
  }
  if (companyParts) {
    company = (
      <span>
        {
          companyParts.map((part, index) => {
            return (
              <span
                className={part.highlight ? styles.highlight : null}
                key={index}>
                {part.text}
              </span>
            );
          })
        }
      </span>
    );
  }
  return (
    <Card className={styles.root}>
      <Section>
        <Text intimate className={styles.company}>
          {job.featuredLabel && (<span className={styles.featuredLabel}>{job.featuredLabel}</span>)}
          {job.classifiedLabel && (<span className={styles.classifiedLabel}>{job.classifiedLabel}</span>)}
          {job.confidentialLabel && (<span className={styles.confidentialLabel}>{job.confidentialLabel}</span>)}
          {company}
        </Text>
        {title}
      </Section>
      {job.sellingPoints &&
        <Section className={styles.sellingPointsSection} >
          <ul className={styles.sellingPointsList} >
            {job.sellingPoints.map((sellingPoint, i) => {
              return (
                <li key={i}><Text intimate className={styles.sellingPoint}>{sellingPoint}</Text></li>
              );
            })}
          </ul>
        </Section>
      }
      { job.description && (
        <Section className={styles.jobDescriptionSection}>
          <Text intimate className={styles.bodyDescriptionText}>{job.description}</Text>
        </Section>
      )}
      <Section className={styles.footerSection}>
        <div className={styles.footerLeft}>
          <div className={styles.jobInfoContainer}>
            <div className={styles.jobInfoList}>
              <Text whispering className={styles.jobInfo}><LocationIcon className={styles.jobInfoIcon} /> {job.location}</Text>
              { job.salary && (<Text whispering className={styles.jobInfo}><MoneyIcon className={styles.jobInfoIcon} /> {job.salary}</Text>)}
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
