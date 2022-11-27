module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    jasmine: true
  },
  plugins: ['prettier', 'unicorn'],
  extends: [
    'eslint:recommended',
    'standard',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    camelcase: 'off',
    quotes: ['error', 'single'],
    'no-multi-spaces': ['error'],
    'no-var': ['error'],
    'no-use-before-define': 'error',
    'no-console': ['warn'],
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': 'off',
    'prettier/prettier': 'error',
    'unicorn/no-null': 'off',
    'unicorn/prefer-top-level-await': 'off'
  }
}
