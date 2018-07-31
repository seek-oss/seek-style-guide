const path = require('path');

module.exports = {
  process: (src, srcPath) => {
    const fileName = path.parse(srcPath).name;
    const classNames = [];

    const classNameRegEx = /\.([-_a-zA-Z0-9]+)(?=[\.:\[\s{])/gm;
    let match = classNameRegEx.exec(src);
    while (match !== null) {
      classNames.push(match[1]);
      match = classNameRegEx.exec(src);
    }

    const cssModule = {};
    classNames.forEach(className => {
      cssModule[className] = `${fileName}__${className}`;
    });

    return `module.exports = ${JSON.stringify(cssModule)}`;
  }
};
