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
let tempHeaderBackgroundColor = saBlue;
let tempHeaderColor = saWhite;
let tempHeaderBorderColor = saBlue;

//set brand specific color
if(tenant === 'jobStreet') {
	tempHeaderBackgroundColor = saWhite;
	tempHeaderColor = saGrey3;
	tempHeaderBorderColor = saGrey4;

	callToActionColor = actionYellow;
	callToActionFontColor = saGrey2;
} else if(tenant === 'jobsDB') {
	tempHeaderBackgroundColor = saWhite;
	tempHeaderColor = saGrey3;
	tempHeaderBorderColor = saGrey4;

	callToActionColor = actionOrange;
	callToActionFontColor = saWhite;
}


/*--------------------EXPORT--------------------*/
//header
export const headerBackground = tempHeaderBackgroundColor;
export const headerColor = tempHeaderColor;
export const headerBorderColor = tempHeaderBorderColor;

//buttons
export const buttonCallToActionBackground = callToActionColor;
export const buttonCallToActionColor = callToActionFontColor;

export const buttonHyperlinkBackground = actionBlue;
export const buttonHyperlinkColor = saWhite;

export const buttonCompletionBackground = actionGreen;
export const buttonCompletionColor = saWhite;

export const buttonAlertBackground = actionRed;
export const buttonAlertColor = saWhite;

export const buttonHighlightBackground = actionPastelBlue;
export const buttonHighlightColor = saGrey2;