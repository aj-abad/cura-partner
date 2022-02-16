module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compiler = require("vue-template-babel-compiler");
        return options;
      });
  },
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      extraResources: ["src/assets/*"],
    },
  },
  transpileDependencies: ["vuetify"],
};
