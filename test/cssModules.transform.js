// Really naive, regex-based class name extractor

module.exports = {
  process: src => {
    const classNames = [];

    const classNameRegEx = /\.([-_a-zA-Z0-9]+)(?=[\.:\[\s{])/gm;
    let match = classNameRegEx.exec(src);
    while (match !== null) {
      classNames.push(match[1]);
      match = classNameRegEx.exec(src);
    }

    const cssModule = {};
    classNames.forEach(className => {
      cssModule[className] = className;
    });

    return `module.exports = ${JSON.stringify(cssModule)}`;
  }
};
