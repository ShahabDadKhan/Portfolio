import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        yellow: "#ffc800",
        accent: "#127EB1",
        error: "#089ECA",
        tertiary: "#36A6BA",
      },
    },
  },
});
