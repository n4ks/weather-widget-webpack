const { defineConfig } = require('@vue/cli-service');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import '@/assets/scss/_fonts.scss';
        @import "@/assets/scss/_variables.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
      }),
    ],
  },
});
