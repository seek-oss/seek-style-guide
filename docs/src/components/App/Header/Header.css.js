import { saBlue, saWhite, saGrey3, saGrey4 } from '../../../../../theme/palette/palette.js';

const tenant = process.env.APP_TENANT;

let headerBackgroundColor = saBlue;
let headerColor = saWhite;
let headerBorderColor = saBlue;

if (tenant === 'jobStreet') {
  headerBackgroundColor = saWhite;
  headerColor = saGrey3;
  headerBorderColor = saGrey4;
} else if (tenant === 'jobsDB') {
  headerBackgroundColor = saWhite;
  headerColor = saGrey3;
  headerBorderColor = saGrey4;
}

export default {
  '.headerBlock': {
    backgroundColor: headerBackgroundColor,
    borderBottomWidth: '1px',
    borderBottomColor: headerBorderColor,
    borderBottomStyle: 'solid'
  },
  '.title': {
    color: headerColor,
    width: '220px',
    textTransform: 'capitalize'
  },
  '.bar': {
    backgroundColor: headerColor
  },
  '.logoLink': {
    textDecoration: 'none'
  },
  '.logo': {
    width: 'auto'
  }
};
