import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text/Text';
import Card from '../Card/Card';
import Section from '../Section/Section';
import LocationIcon from '../LocationIcon/LocationIcon';
import MoneyIcon from '../MoneyIcon/MoneyIcon';
import styles from './JobCard.less';
import classnames from 'classnames';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import getJobAdTypeOption from './jobCardHelper.js';

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

const renderLocation = ({ link, name, child }) => {
  let locationComps = [];
  if (link) {
    locationComps.push(<a href={link} className={styles.locationLink}><span className={styles.locationName}>{name}</span></a>);
  } else {
    locationComps.push(<span className={styles.locationName}>{name}</span>);
  }
  if (child) {
    locationComps.push(<span>&nbsp;>&nbsp;</span>);
    locationComps = [...locationComps, ...renderLocation(child)];
  }
  return locationComps;
};

const JobCard = ({ job, keyword = '', jobAdType }) => {
  const jobAdTypeOption = getJobAdTypeOption(jobAdType);
  let title = <Text waving semiStrong className={styles.positionTitle}>{job.jobTitle}</Text>;
  let company = job.company && job.company.name && <span className={styles.companyName}>{job.company.name}</span> || '';
  const keywordParts = getParts(job.jobTitle, keyword);
  const companyParts = job.company && getParts(job.company.name, keyword) || null;
  if (keywordParts) {
    title = (
      <div>
        {
          keywordParts.map((part, index) => {
            return (
              <Text
                strong={part.highlight}
                semiStrong={!part.highlight}
                waving
                className={classnames(styles.positionTitle, { [styles.titleKeyword]: part.highlight })}
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
      <span className={styles.companyName}>
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
    <Card className={classnames(styles.root, { [styles.highlightedBg]: jobAdTypeOption.showHighlightedBg })}>
      <Section className={styles.headerSection}>
        <a href={job.jobUrl} className={styles.positionLink} target="_blank">{title}</a>
      </Section>
      <Section className={styles.bodySection}>
        <div className={styles.bodyDetailsWrapper}>
          <Text intimate className={styles.company}>
            {job.featuredLabel && (<span className={styles.featuredLabel}>{job.featuredLabel}</span>)}
            {job.classifiedLabel && (<span className={styles.classifiedLabel}>{job.classifiedLabel}</span>)}
            {job.confidentialLabel && (<span className={styles.confidentialLabel}>{job.confidentialLabel}</span>)}
            {(job.company && job.company.link && <a href={job.company.link} className={styles.companyLink}>{company}</a>) || company}
          </Text>
          {jobAdTypeOption.showSellingPoint && job.sellingPoints && (
            <div
              className={classnames(styles.sellingPointsSection, { [styles.withDescription]: jobAdTypeOption.showDescription && job.description })}>
              <ul className={styles.sellingPointsList} >
                {job.sellingPoints.map((sellingPoint, i) => {
                  return (
                    <li key={i}><Text intimate className={styles.sellingPoint}>{sellingPoint}</Text></li>
                  );
                })}
              </ul>
            </div>
          )}
          {jobAdTypeOption.showDescription && job.description && (
            <div className={styles.jobDescriptionSection}>
              <Text intimate className={styles.bodyDescriptionText}>{job.description}</Text>
            </div>
          )}
        </div>
        {jobAdTypeOption.showCompanyPic && job.companyPictureUrl && (
          <div className={styles.companyPicWrapper}>
            <img className={styles.companyPic} src={job.companyPictureUrl} />
          </div>
        )}
      </Section>
      <Section className={styles.footerSection}>
        <div className={styles.footerLeft}>
          <div className={styles.jobInfoContainer}>
            <div className={styles.jobInfoList}>
              <Text intimate className={styles.jobInfo}>
                <LocationIcon className={styles.jobInfoIcon} />
                {job.locations && job.locations.reduce(
                  (accLocations, location, index) => {
                    if (index > 0) {
                      accLocations.push(<span>,&nbsp;</span>);
                    }
                    accLocations.push(renderLocation(location));
                    return accLocations;
                  }, []
                )}
              </Text>
              {job.salary && (<Text intimate className={styles.jobInfo}><MoneyIcon className={styles.jobInfoIcon} /><span>{job.salary}</span></Text>)}
            </div>
            <Text whispering className={styles.postingDuration}>{job.postingDuration}</Text>
          </div>
        </div>
        {jobAdTypeOption.showCompanyLogo && (
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
    company: PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    }).isRequired,
    jobTitle: PropTypes.string.isRequired,
    jobUrl: PropTypes.string.isRequired,
    sellingPoints: PropTypes.arrayOf(PropTypes.string),
    companyPictureUrl: PropTypes.string,
    companyLogoUrl: PropTypes.string,
    description: PropTypes.string,
    locations: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      child: PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
        child: PropTypes.shape({
          name: PropTypes.string
        })
      })
    })).isRequired,
    salary: PropTypes.string,
    postingDuration: PropTypes.string.isRequired,
    featuredLabel: PropTypes.string,
    classifiedLabel: PropTypes.string,
    confidentialLabel: PropTypes.string
  }).isRequired,
  jobAdType: PropTypes.string
};
