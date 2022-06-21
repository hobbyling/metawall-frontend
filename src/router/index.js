import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: '',
        component: () => import("../components/Home.vue"),
      },
      {
        path: '/hot',
        component: () => import("../components/Home.vue"),
      },
      {
        path: '/old',
        component: () => import("../components/Home.vue"),
      },
      {
        path: '/:id',
        component: () => import("../components/pages/Profile.vue"),
        children: [
          {
            path: '/likes',
            component: () => import("../components/Card.vue"),
          }
        ]
      },
    ]
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
    path: "/:id", component: () => import("../views/about.vue"),
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
});