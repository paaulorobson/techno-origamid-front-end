import Vue from "vue";
import VueRouter from "vue-router";
//pages
import Home from "../pages/Home.vue";
import Cursos from "../pages/Cursos.vue";
import Contato from "../pages/Contato.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Cursos,
  },
  {
    path: "/contato",
    name: "contato",
    component: Contato,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
