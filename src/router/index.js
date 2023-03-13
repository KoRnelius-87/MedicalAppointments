// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainView.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home/Home-View.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/Home/components/Login.vue"
          ),
      },
      {
        path: "/signUp",
        name: "signUp",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/Home/components/SignUp.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
