import {header} from '../../../../../theme/palette/palette.js';

export default {
	'.headerBlock': {
		backgroundColor: header.background,
		borderBottomWidth: '1px',
		borderBottomColor: header.color,
		borderBottomStyle: 'solid',
	},
	'.title': {
		color: header.color,
		width: '220px',
		textTransform: 'capitalize'
	},
	'.bar': {
		backgroundColor: header.color
	},
	'.logoLink': {
		textDecoration: 'none'
	}
}