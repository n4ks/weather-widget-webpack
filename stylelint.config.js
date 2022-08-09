module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.scss', '**/*.scss'],
      rules: {
        'unit-allowed-list': ['px', '%'],
        'color-hex-case': 'upper',
        'scss/at-import-partial-extension': 'always',
      },
    },
  ],
};
