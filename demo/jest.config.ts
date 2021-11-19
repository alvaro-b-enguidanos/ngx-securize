import { pathsToModuleNameMapper } from 'ts-jest/utils';
import defaultConf from '../jest.config';
const { compilerOptions } = require('../tsconfig.json');

const conf = {
  ...defaultConf,
  setupFilesAfterEnv: ['<rootDir>../src/setupJest.ts'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/test.ts', '<rootDir>/dist/'],
  modulePathIgnorePatterns: ['<rootDir>../dist/'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>../' }),
};

export default conf;
