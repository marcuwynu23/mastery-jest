import type {Config} from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          moduleResolution: "bundler",
          ignoreDeprecations: "6.0",
        },
      },
    ],
  },
};

export default config;
