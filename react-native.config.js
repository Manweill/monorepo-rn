const path = require('path');

// 第三方项目依赖
const extAppDependencies = require('./app/demo/package.json');

const deps = Object.keys(extAppDependencies.dependencies).map(k => ({
  [k]: {root: path.join(__dirname, `./node_modules/${k}`)},
}));

module.exports = {
  dependencies: {
    ...deps.reduce((a, b) => ({...a, ...b})),
  },
};
