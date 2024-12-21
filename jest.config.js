module.exports = {
  testEnvironment: "node", // Use "jsdom" for browser-based testing
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"], // Match test files
  collectCoverage: true, // Enable coverage reporting
  coverageDirectory: "coverage", // Directory for coverage reports
};
