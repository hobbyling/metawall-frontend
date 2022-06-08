import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/", component: () => import("../views/index.vue"),
  },
  {
    path: "/login", component: () => import("../views/login.vue"),
  },
  {
    path: "/register", component: () => import("../views/register.vue"),
  },
  {
    path: "/get-start", component: () => import("../views/getStart.vue"),
  },
  {
    path: "/about", component: () => import("../views/about.vue"),
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
});