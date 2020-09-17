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
  extends: ["plugin:vue/essential", "prettier/standard", "plugin:prettier/recommended", "prettier/vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: 0,
    quotes: 0,
    "space-before-function-paren": 0,
    "object-curly-spacing": 0,
    "max-len": [1, 120, 2, { ignoreComments: true }],
    "prettier/prettier": "error",
  },
};
