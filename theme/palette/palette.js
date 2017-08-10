let tenant = process.env.SKU_TENANT;

//brand colors
const dbBlue 		= '#0C4B85';
const jsBlue 		= '#1C3F94';
const saBlue 		= '#0D3880';

//Action colors
const actionYellow 		= '#FFF200';
const actionOrange 		= '#FF9000';
const actionBlue 		= '#298EB9';
const actionGreen 		= '#63B209';
const actionRed 		= '#FF4B4B';
const actionPastelBlue	= '#DDF1FA';

//Neutrals
const saBlack 		= '#000000';
const saGrey1		= '#333333';
const saGrey2		= '#666666';
const saGrey3		= '#999999';
const saGrey4		= '#CCCCCC';
const saGrey5		= '#EEEEEE';
const saWhite 		= '#FFFFFF';

//Set default Call to Aciton button
let callToActionColor = actionOrange;
let callToActionFontColor = saWhite;

//Set default header background color
let headerBackgroundColor = saBlue;
let headerColor = saWhite;
let headerBorderColor = saBlue;

//set brand specific color
if(tenant === 'jobStreet') {
	headerBackgroundColor = saWhite;
	callToActionColor = actionYellow;
	callToActionFontColor = saWhite;
	headerColor = saGrey3;
	headerBorderColor = saGrey4;
} else if(tenant === 'jobsDB') {
	headerBackgroundColor = saWhite;
	callToActionColor = actionOrange;
	callToActionFontColor = saWhite;
	headerColor = saGrey3;
	headerBorderColor = saGrey4;
}


/*--------------------EXPORT--------------------*/
//header
export const header = {
	background: headerBackgroundColor,
	color: headerColor,
	borderColor: headerBorderColor
};

//buttons
export const buttonCallToAction = {
	background: callToActionColor,
	color: callToActionFontColor
};
export const buttonHyperlink = {
	background: actionBlue,
	color: saWhite
};
export const buttonCompletion = {
	background: actionGreen,
	color: saWhite
};
export const buttonAlert = {
	background: actionRed,
	color: saWhite
};
export const buttonHighlight = {
	background: actionPastelBlue,
	color: saGrey2
};