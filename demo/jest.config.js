const { pathsToModuleNameMapper } = require('ts-jest/utils');
const defaultConf = require('../jest.config');
const { compilerOptions } = require('../tsconfig.json');

module.exports = {
  ...defaultConf,
  setupFilesAfterEnv: ['<rootDir>../src/setupJest.ts'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/test.ts', '<rootDir>/dist/'],
  modulePathIgnorePatterns: ['<rootDir>../dist/'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>../' }),
};
