import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text/Text';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Section from '../Section/Section';
import ChevronIcon from '../ChevronIcon/ChevronIcon';
import LocationIcon from '../LocationIcon/LocationIcon';
import MoneyIcon from '../MoneyIcon/MoneyIcon';
import styles from './JobCard.less';
import classnames from 'classnames';
import { getJobAdTypeOption, getParts } from './jobCardHelper.js';
import LocationGroup, { LocationsPropTypes } from './components/LocationGroup/LocationGroup';
import CompanyLink, { CompanyLinkPropTypes } from './components/CompanyLink/CompanyLink';
import ShelfSection, { ShelfSectionPropTypes } from './components/ShelfSection/ShelfSection';
import defaultLink from './components/Link/Link';

export default class JobCard extends React.Component {
  constructor() {
    super();

    this.state = {
      shelfSectionOpen: false
    };
  }

  handleShelfSectionToggle = e => {
    e.stopPropagation();
    this.setState({ shelfSectionOpen: !this.state.shelfSectionOpen });
  };

  render() {
    const { shelfSectionOpen } = this.state;
    const { job, keyword = '', jobAdType, LinkComponent = defaultLink } = this.props;
    const jobAdTypeOption = getJobAdTypeOption(jobAdType);
    let title = (<Text waving semiStrong className={styles.positionTitle}>{job.jobTitle}</Text>);
    const keywordParts = getParts(job.jobTitle, keyword);
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
              {job.company && <CompanyLink company={job.company} keyword={keyword} LinkComponent={LinkComponent} />}
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
                  {job.locations && <LocationGroup locations={job.locations} LinkComponent={LinkComponent} />}
                </Text>
                {job.salary && (<Text intimate className={styles.jobInfo}><MoneyIcon className={styles.jobInfoIcon} /><span>{job.salary}</span></Text>)}
              </div>
              <div>
                <Text whispering className={styles.postingDuration}>{job.postingDuration}</Text>
                {job.shelf &&
                  <Button color="hyperlink" className={styles.shelfToggle}>
                    <Text whispering baseline={false} className={styles.shelfToggleText} onClick={this.handleShelfSectionToggle}>
                      {shelfSectionOpen ? 'less' : 'more'} <ChevronIcon direction={shelfSectionOpen ? 'up' : 'down'} svgClassName={styles.shelfToggleIcon} />
                    </Text>
                  </Button>
                }
              </div>
            </div>
          </div>
          {jobAdTypeOption.showCompanyLogo && (
            <div className={styles.companyLogoWrapper}>
              <img className={styles.companyLogo} src={job.companyLogoUrl} />
            </div>
          )}
        </Section>
        {job.shelf && shelfSectionOpen && <ShelfSection shelf={job.shelf} LinkComponent={LinkComponent} />}
      </Card>
    );
  }
}
JobCard.propTypes = {
  keyword: PropTypes.string,
  job: PropTypes.shape({
    company: CompanyLinkPropTypes,
    jobTitle: PropTypes.string.isRequired,
    jobUrl: PropTypes.string.isRequired,
    sellingPoints: PropTypes.arrayOf(PropTypes.string),
    companyPictureUrl: PropTypes.string,
    companyLogoUrl: PropTypes.string,
    description: PropTypes.string,
    locations: LocationsPropTypes,
    salary: PropTypes.string,
    postingDuration: PropTypes.string.isRequired,
    featuredLabel: PropTypes.string,
    classifiedLabel: PropTypes.string,
    confidentialLabel: PropTypes.string,
    shelf: ShelfSectionPropTypes
  }).isRequired,
  jobAdType: PropTypes.string,
  LinkComponent: PropTypes.func
};
