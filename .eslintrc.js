module.exports = {
  root: true,
  settings: {
    // This is a work around for react-native imports always showing errors, it is an open issue you can track it here
    // https://github.com/facebook/react-native/issues/28549
    'import/ignore': ['react-native'],
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:import/warnings',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    semi: [2, 'always'],
    'react/prop-types': 2,
  },
};
