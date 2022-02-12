import path from 'path';
import { getJestPathAliases } from './src/utils/paths';

const rootDirectory = path.resolve(__dirname);

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 70,
      function: 80,
      lines: 80,
      statements: 80,
    },
  },
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    },
  },
  modulePathIgnorePatterns: [
    `${rootDirectory}/src/config/dockerConfig.ts`,
    `${rootDirectory}/src/index.ts`,
  ],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: getJestPathAliases(rootDirectory),
  reporters: [
    'default',
    [
      path.resolve(__dirname, 'node_modules', 'jest-html-reporter'),
      {
        pageTitle: 'Demo test Report',
        outputPath: 'test-report.html',
      },
    ],
  ],
  rootDir: rootDirectory,
  roots: [rootDirectory],
  setupFilesAfterEnv: [`${rootDirectory}/__tests__/setup.ts`],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/build',
    `${rootDirectory}/__tests__/fixtures`,
    `${rootDirectory}/__tests__/setup.ts`,
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: ['((/__tests__/.*)|(\\.|/)(test|spec))\\.tsx?$'],
};
