import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//FontAwesome Library
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faSortDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//VueGlide Library
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

Vue.use(VueGlide);

library.add(faSearch, faArrowRight, faChevronLeft, faChevronRight, faSortDown);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
