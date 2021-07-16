export default (...refs) => ref => {
  refs.forEach(callRef => {
    if (typeof callRef === 'function') {
      callRef(ref);
    }
  });
};
