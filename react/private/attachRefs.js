// @flow
export default (...refs: Array<Function>) => (
  ref: ?React$ElementRef<'input'> | ?React$ElementRef<'textarea'>
): void => {
  refs.forEach(callRef => {
    if (typeof callRef === 'function') {
      callRef(ref);
    }
  });
};
