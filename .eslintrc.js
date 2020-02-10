module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
  overrides: [
    {
      files: ["*-test.js","*.spec.js", "*.js", "*.jsx"],
      rules: {
        "react/no-unescaped-entities": "off",
        "react/jsx-props-no-spreading": "off",
        "no-unused-expressions": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
      }
    }
  ],

};
