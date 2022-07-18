module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  verbose: true,
  clearMocks: true,
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
}
