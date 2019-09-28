import Vue from "vue";
import App from "./App.vue";
//FontAwesome Library
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//VueGlide Library
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

Vue.use(VueGlide);

library.add(faSearch, faArrowRight);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
