module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./packages/**/*.tsx"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/build/",
    "/dist/",
    ".figma.tsx",
    ".stories.tsx",
  ],
  coverageDirectory: "./coverage",
  coverageReporters: ["text", "cobertura"],
  reporters: ["default", "jest-junit"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    "./packages/**/*.tsx": {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss|sass|pcss)$": "<rootDir>/jest/__mocks__/styleMock.js",
    "\\.svg$": "<rootDir>/jest/__mocks__/svgMock.js",
  },
  roots: ["<rootDir>/packages"],
  testEnvironment: "jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.(ts|js)x?$",
  transform: {
    "^.+\\.m?(ts|js)x?$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/__mocks__/fileTransformer.js",
  },
  transformIgnorePatterns: ["node_modules/(?!@sikt/*)"],
  setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
};
