import get from 'lodash/get';
import invoke from 'lodash/invoke';

const responsiveBreakpoint = 740;
const smallDeviceOnlyMedia = `(max-width: ${responsiveBreakpoint - 1}px)`;
const getMatchMedia =
  typeof window !== 'undefined' &&
  invoke(window, 'matchMedia', smallDeviceOnlyMedia);

export default () => get(getMatchMedia, 'matches');
