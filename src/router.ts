import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "@/views/Home.vue";
const Home = () => import("@/views/Home.vue");

const About = () => {
  console.log("fetching component");
  return import("@/views/About.vue");
};
// import Blog from "@/views/Blog.vue";
const Blog = () => import("@/views/Blog.vue");

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
  {
    name: "blog",
    path: "/blog",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
});

export default router;
