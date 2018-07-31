// @flow
export type Tone = 'positive' | 'info' | 'critical' | 'help';

export const TONE: {
  ['POSITIVE' | 'INFO' | 'CRITICAL' | 'HELP']: Tone
} = {
  POSITIVE: 'positive',
  INFO: 'info',
  CRITICAL: 'critical',
  HELP: 'help'
};
