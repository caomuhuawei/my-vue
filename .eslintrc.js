module.exports = {
  globals: {
    window: true,
    document: true,
    location: true,
    history: true,
  },
  plugins: ["prettier"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2016,
    sourceType: "module",
  },
  extends: ["plugin:vue/essential", "plugin:prettier/recommended", "prettier/vue"],
  rules: {
    "max-len": [1, 120, 2, { ignoreComments: true }],
    "prettier/prettier": "error",
  },
};
