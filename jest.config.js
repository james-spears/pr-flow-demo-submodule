export default {
  moduleNameMapper: {
    "@/(.*)": ["<rootDir>/src/$1"],
  },
  collectCoverageFrom: ["./src/**/*.{ts,tsx}", "!**/node_modules/**"],
};
