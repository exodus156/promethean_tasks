export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./setupTests.js'],
  moduleFileExtensions: ['tsx', 'ts', 'web.js', 'js', 'web.ts', 'web.tsx', 'json', 'web.jsx', 'jsx', 'node'],
  modulePaths: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};
