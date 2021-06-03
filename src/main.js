import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import styles from "./styles/global.css";

import Loading from "./components/Loading.vue";

Vue.config.productionTip = false;

Vue.component("Loading", Loading); //Component Global

new Vue({
  router,
  styles,
  render: (h) => h(App),
}).$mount("#app");
