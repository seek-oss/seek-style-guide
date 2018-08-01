// @flow
type Tone = 'positive' | 'info' | 'critical' | 'help' | 'neutral';

export const TONE: {
  ['POSITIVE' | 'INFO' | 'CRITICAL' | 'HELP' | 'NEUTRAL']: Tone
} = {
  POSITIVE: 'positive',
  INFO: 'info',
  CRITICAL: 'critical',
  HELP: 'help',
  NEUTRAL: 'neutral'
};
