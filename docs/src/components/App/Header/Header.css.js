import {headerBackground, headerColor, headerBorderColor} from '../../../../../theme/palette/palette.js';

export default {
	'.headerBlock': {
		backgroundColor: headerBackground,
		borderBottomWidth: '1px',
		borderBottomColor: headerBorderColor,
		borderBottomStyle: 'solid',
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
}