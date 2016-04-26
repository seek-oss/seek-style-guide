export default sheet => {
  const lessVars = {};

  const variables = sheet
    .match(/@(.[^;]*)/g)
    .forEach(variable => {
      if (variable.indexOf('@import') === 0) {
        return;
      }
      const definition = variable.split(/:\s*/);
      lessVars[definition[0]] = definition[1];
    });

	return lessVars;
}
