import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
// import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // black: colors.black,
        primary: "#3f51b5",
        secondary: "#b0bec5",
        yellow: "#ffc800",
        // accent: "#127EB1",
        // error: "#089ECA",
        // tertiary: "#36A6BA",
        backgroundColor: "#141414",
      },
      // dark: {
      //   black: "#fff",
      //   primary: "#127EB1",
      //   secondary: "#089ECA",
      //   yellow: "#36A6BA",
      // },
    },
  },
});
