module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  globals: {
    window: true,
    module: true
  },
  rules: {
    "semi": [2, "always"],
    "indent": [1, 2],
    "no-console": 0
    
  }
};