const conf = {
  testURL: 'http://localhost',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  transform: {
    '^.+\\.(ts|js|mjs|html|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg|gif)$': 'jest-preset-angular',
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

export default conf;
