import booleanPropsToEnums from './booleanPropsToEnums';

export const booleanColors = [
  'secondary',
  'positive',
  'critical',
  'info'
];

export default booleanPropsToEnums({ color: booleanColors });
