// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueAnalytics from "vue-analytics";
import VueNumerals from "vue-numerals";
import VueRx from "vue-rx";

const isProd = process.env.NODE_ENV === "production";

Vue.use(VueNumerals);
Vue.use(VueRx);

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-124821225-1",
  checkDuplicatedScript: true,
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
