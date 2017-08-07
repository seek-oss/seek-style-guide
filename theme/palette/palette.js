let tenant = process.env.SKU_TENANT;

//default SeekAsia colors
let primary = '#0D3880';
let secondary = '#E60278';
let tempDefault = '#D6D6D6';
let success = '#157E00';

let headerBackgroundColor = primary;
let headerFontColor = '#FFF';

if(tenant == 'jobStreet') {
	primary = '#FFF200';
	secondary = '#1C3F94';
	tempDefault = '#DDDDDD';
	success = '#18CA6C';

	headerBackgroundColor = secondary;
	headerFontColor = '#FFF';
} else if(tenant == 'jobsDB') {
	primary = '#FFF200';
	secondary = '#1C3F94';
	tempDefault = '#DDDDDD';
	success = '#18CA6C';

	headerBackgroundColor = '#FFF';
	headerFontColor = '#298EB9';
}


export const buttonPrimary = primary;
export const buttonDefault = tempDefault;
export const buttonSuccess = success;

export const headerBackground = headerBackgroundColor;
export const headerColor = headerFontColor;