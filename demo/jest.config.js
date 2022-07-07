const { pathsToModuleNameMapper } = require('ts-jest');
const defaultConf = require('../jest.config');
const { compilerOptions } = require('../tsconfig.json');

// eslint-disable-next-line no-undef
globalThis.ngJest = {
  skipNgcc: false,
  tsconfig: 'tsconfig.spec.json',
};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...defaultConf,
  setupFilesAfterEnv: ['<rootDir>../src/setup-jest.ts'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/test.ts', '<rootDir>/dist/'],
  modulePathIgnorePatterns: ['<rootDir>../dist/'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>../' }),
};

// const conf = {
//   ...defaultConf,
//   setupFilesAfterEnv: ['<rootDir>../src/setup-jest.ts'],
//   testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/test.ts', '<rootDir>/dist/'],
//   modulePathIgnorePatterns: ['<rootDir>../dist/'],
//   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>../' }),
// };

// export default conf;
