import PropTypes from 'prop-types';
import Constants from '../Constants/Constants';

const { JOBADTYPE_JOBSDB_DEFAULT, JOBADTYPE_JOBSDB_BRANDED, JOBADTYPE_JOBSTREET_DEFAULT, JOBADTYPE_JOBSTREET_STANDOUT } = Constants;

const jobsdbDefault = {
  showCompanyLogo: false,
  showCompanyPic: false,
  showHighlightedBg: false,
  showSellingPoint: true,
  showDescription: false,
  showTagLinks: false
};
const jobsdbBranded = {
  showCompanyLogo: true,
  showCompanyPic: false,
  showHighlightedBg: false,
  showSellingPoint: true,
  showDescription: false,
  showTagLinks: false
};
const jobstreetDefault = {
  showCompanyLogo: true,
  showCompanyPic: false,
  showHighlightedBg: false,
  showSellingPoint: false,
  showDescription: true,
  showTagLinks: true
};
const jobstreetStandout = {
  showCompanyLogo: true,
  showCompanyPic: true,
  showHighlightedBg: true,
  showSellingPoint: true,
  showDescription: true,
  showTagLinks: true
};

const getJobAdTypeOption = jobAdType => {
  switch (jobAdType) {
    case JOBADTYPE_JOBSDB_DEFAULT:
      return jobsdbDefault;
    case JOBADTYPE_JOBSDB_BRANDED:
      return jobsdbBranded;
    case JOBADTYPE_JOBSTREET_DEFAULT:
      return jobstreetDefault;
    case JOBADTYPE_JOBSTREET_STANDOUT:
      return jobstreetStandout;
    default:
      return {};
  }
};

export default getJobAdTypeOption;
getJobAdTypeOption.propTypes = {
  jobAdType: PropTypes.string
};
