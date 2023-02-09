/* eslint-disable */
export default {
  displayName: 'zi-test',
  preset: './jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: './coverage/zi-test',
  collectCoverageFrom: ['src/app/**/*.ts', '!**/node_modules/**', '!**/dist/**', ],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
