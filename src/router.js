import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/starships",
      name: "Starship",
      component: () => import(/* webpackChunkName: "about" */ "./views/Starship.vue")
    },
    {
      path: "/characters",
      name: "Characters",
      component: () => import(/* webpackChunkName: "about" */ "./views/Characters.vue")
    }
  ]
});
