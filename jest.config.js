module.exports = {
  moduleNameMapper: {
    // test 時に CSS ファイルを読み込まないようにする設定
    '\\.css$': '<rootDir>/node_modules/jest-css-modules'
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
  moduleDirectories: ['node_modules', 'src']
};
