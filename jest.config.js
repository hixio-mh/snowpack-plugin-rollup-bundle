const process = require("process")

module.exports = {
  clearMocks: true,
  globalSetup: "<rootDir>/jest-helper.js",
  rootDir: process.cwd(),
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/__tests__/example_dir/"
  ],
  testRunner: "jest-circus/runner",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$"
  ],
};
