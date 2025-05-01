module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'no-anonymous-exports-page-templates': 'off',
    'limited-exports-page-templates': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
};