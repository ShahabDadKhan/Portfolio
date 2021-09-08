import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSmoothScroll from "vue2-smooth-scroll";
// Vue.use(VueSmoothScroll);
Vue.use(VueSmoothScroll, { duration: 1000, updateHistory: false });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  // VueSmoothScroll,
  render: (h) => h(App),
}).$mount("#app");
