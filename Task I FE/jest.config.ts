export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
	},
	moduleNameMapper: {
		'^(.+\\.svg)\\?react$': '<rootDir>/src/__mocks__/svg.tsx',
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['./setupTests.ts'],
	moduleFileExtensions: [
		'tsx',
		'ts',
		'web.js',
		'js',
		'web.ts',
		'web.tsx',
		'json',
		'web.jsx',
		'jsx',
		'node',
	],
	modulePaths: ['<rootDir>/src'],
	testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
}
