module.exports = {
  testURL: 'http://localhost',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg|gif)$': 'jest-transform-stub',
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/demo/', '<rootDir>/src/test.ts', '<rootDir>/dist/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/jestGlobalMocks.ts', '/src/setupJest.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
