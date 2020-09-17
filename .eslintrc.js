module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    tcg: true,
    createjs: true,
  },
  plugins: ["prettier"],
  extends: [
    "plugin:vue/essential",
    // "@vue/standard",
    "plugin:prettier/recommended",
    "prettier/standard",
    "prettier/vue",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: 0,
    quotes: 0,
    "space-before-function-paren": 0,
    "object-curly-spacing": 0,
    // indent: ["error", 2, { SwitchCase: 1, flatTernaryExpressions: true }],
    "max-len": [1, 120, 2, { ignoreComments: true }],
    "prettier/prettier": "error",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
