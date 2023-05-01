module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'plugin:react/recommended', 'airbnb', 'plugin:react-hooks/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'object-curly-newline': 'off',
    'linebreak-style': ['error', 'windows'],
    'no-param-reassign': [2, { props: false }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.js'],
};
