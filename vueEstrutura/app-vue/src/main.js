import Vue from "vue";
import App from "./App.vue";

import HeaderComponent from "./components/HeaderComponent.vue";

Vue.component("HeaderComponent", HeaderComponent);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
