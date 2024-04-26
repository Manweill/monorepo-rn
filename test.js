const path = require('path');
const extAppDependencies = require('./app/markdown-viewer/package.json');

const deps = Object.keys(extAppDependencies.dependencies).map(k => ({
  [k]: {root: path.join(__dirname, `./node_modules/${k}`)},
}));
console.log(deps.reduce((a, b) => ({...a, ...b})));
