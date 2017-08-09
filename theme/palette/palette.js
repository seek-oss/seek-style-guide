let tenant = process.env.SKU_TENANT;
const saWhite = '#FFF';
const jsCallToAction = '#FFF200';

//default SeekAsia colors
let primary = '#0D3880';
let secondary = '#E60278';
let tempDefault = '#D6D6D6';
let success = '#157E00';

let btnTextPrimary = saWhite;
let btnTextSecondary = saWhite;
let btnTextTempDefault = '#666';
let btnTextSuccess = saWhite;

let headerBackgroundColor = primary;
let headerFontColor = saWhite;

if(tenant === 'jobStreet') {
	primary = jsCallToAction;
	secondary = '#1C3F94';
	tempDefault = '#DDDDDD';
	success = '#18CA6C';

	headerBackgroundColor = secondary;
	headerFontColor = saWhite;
} else if(tenant === 'jobsDB') {
	primary = '#FF9000';
	secondary = '#298EB9';
	tempDefault = '#DDDDDD';
	success = '#63B209';

	headerBackgroundColor = '#1e3688';
	headerFontColor = saWhite;
}


export const buttonPrimary = primary;
export const buttonDefault = tempDefault;
export const buttonSuccess = success;

export const buttonTextPrimary = btnTextPrimary;
export const buttonTextDefault = btnTextTempDefault;
export const buttonTextSuccess = btnTextSuccess;

export const headerBackground = headerBackgroundColor;
export const headerColor = headerFontColor;