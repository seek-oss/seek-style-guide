import {
	actionOrange,
	actionYellow,
	actionBlue,
	actionGreen,
	actionRed,
	actionPastelBlue,
	saWhite,
	saGrey2
} from '../../theme/palette/palette.js';

const tenant = process.env.SKU_TENANT;

let callToActionBackgroundColor = actionOrange;

if (tenant === 'jobStreet') {
  callToActionBackgroundColor = actionYellow;
} else if (tenant === 'jobsDB') {
  callToActionBackgroundColor = actionOrange;
}

export default {
  '.callToAction': {
    backgroundColor: callToActionBackgroundColor,
    color: saWhite
  },
  '.hyperlink': {
    backgroundColor: actionBlue,
    color: saWhite
  },
  '.completion': {
    backgroundColor: actionGreen,
    color: saWhite
  },
  '.alert': {
    backgroundColor: actionRed,
    color: saWhite
  },
  '.highlight': {
    backgroundColor: actionPastelBlue,
    color: saGrey2
  }

};
