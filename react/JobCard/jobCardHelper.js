import Constants from '../Constants/Constants';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const { JOBADTYPE_JOBSDB_DEFAULT, JOBADTYPE_JOBSDB_BRANDED, JOBADTYPE_JOBSTREET_DEFAULT, JOBADTYPE_JOBSTREET_STANDOUT } = Constants;

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

export const getJobAdTypeOption = jobAdType => {
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

export const getParts = (text, query) => {
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
