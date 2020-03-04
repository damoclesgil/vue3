import Vue from "vue";
import App from "./App.vue";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);
import "./assets/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
