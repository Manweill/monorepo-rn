const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const path = require('path');
// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {
//     resolver:{enableSymlinks: true},
// };
// ;

// Find the project and workspace directories
const projectRoot = path.resolve(projectRoot, './app/markdown-viewer');
// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(workspaceRoot, 'node_modules'),
  path.resolve(projectRoot, 'node_modules'),
];

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
