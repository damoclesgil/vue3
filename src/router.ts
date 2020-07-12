import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("@/views/Home.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
});

export default router;
