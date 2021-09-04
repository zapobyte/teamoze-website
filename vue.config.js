const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const version = JSON.parse(packageJson).version || 0;
const webpack = require('webpack');

module.exports = {
  // enable/disable eslint error messages
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "~@/scss/main.scss"
                `,
      },
      scss: {
        prependData: `@import "~@/scss/main.scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_PACKAGE_VERSION: '"' + version + '"',
        },
      }),
    ],
  },
  //filenameHashing: false
};
