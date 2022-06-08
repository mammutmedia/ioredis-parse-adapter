module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    jasmine: true
  },
  extends: ['eslint:recommended', 'standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11
  },
  globals: {
    Parse: true
  },
  // add your custom rules here
  rules: {
    camelcase: 'off',
    'no-new': 'off'
  }
}
