import PropTypes from 'prop-types';

const jobsdbDefault = {
  showCompanyLogo: false,
  showCompanyPic: false,
  showHighlightedBg: false,
  showSellingPoint: true,
  showDescription: false
};
const jobsdbBranded = {
  showCompanyLogo: true,
  showCompanyPic: false,
  showHighlightedBg: false,
  showSellingPoint: true,
  showDescription: false
};
const jobstreetDefault = {
  showCompanyLogo: true,
  showCompanyPic: false,
  showHighlightedBg: false,
  showSellingPoint: false,
  showDescription: true
};
const jobstreetStandout = {
  showCompanyLogo: true,
  showCompanyPic: true,
  showHighlightedBg: true,
  showSellingPoint: true,
  showDescription: true
};

const getJobAdTypeOption = jobAdType => {
  switch (jobAdType) {
    case 'jobsdbDefault':
      return jobsdbDefault;
    case 'jobsdbBranded':
      return jobsdbBranded;
    case 'jobstreetDefault':
      return jobstreetDefault;
    case 'jobstreetStandout':
      return jobstreetStandout;
    default:
      return jobsdbDefault;
  }
};

export default getJobAdTypeOption;
getJobAdTypeOption.propTypes = {
  jobAdType: PropTypes.string
};
