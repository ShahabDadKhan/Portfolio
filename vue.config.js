module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/sass/variable.scss";`,
      },
    },
  },
  transpileDependencies: ["vuetify"],
};
