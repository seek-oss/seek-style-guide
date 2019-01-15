const fs = require('fs');
const { promisify } = require('util');
const { compiler, beautify } = require('flowgen').default;
const glob = promisify(require('glob'));

const WARNING = '/** THIS FILE IS GENERATED, MANUAL CHANGES WILL BE DISCARDED **/\n';
const FLOW_DECLARATION = '// @flow\n';

(async() => {
  const definitionFiles = await glob(`${__dirname}/../react/**/*.d.ts`);

  definitionFiles.forEach((filePath) => {
    generateFlowFile(filePath)
  })
})();

function generateFlowFile(filename) {
  const flowDefs = compiler.compileDefinitionFile(filename);
  const beautifiedFlowDefs = beautify(WARNING + FLOW_DECLARATION + flowDefs);
  const { directory, componentName } = parsePath(filename);
  const flowFilePath = `${directory}/${componentName}.js.flow`;

  fs.writeFileSync(flowFilePath, beautifiedFlowDefs);
}

function parsePath(filename) {
  const split = filename.split('/');
  const lastIndex = split.length - 1;
  const directory = split.slice(0, lastIndex).join('/');
  const componentName = split[lastIndex].split('.d.ts')[0];

  return {
    directory,
    componentName
  }
}