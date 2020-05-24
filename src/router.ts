import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
const About = () => {
  console.log("fetching component");
  return import("@/views/About.vue");
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    name: "about",
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
});

export default router;
