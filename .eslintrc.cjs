/** @type import("eslint-define-config").ESLintConfig */
module.exports = {
  root: true,
  ignorePatterns: ["*eslintrc*", "copy.ts"],
  extends: ["plugin:@beequeue/base", "plugin:@beequeue/typescript", "plugin:@beequeue/esm"],
  parserOptions: {
    project: ["./tsconfig.json", "mfs/*/tsconfig.json"],
  },
  rules: {
    "prettier/prettier": "off",
  },
}
