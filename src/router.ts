import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "@/views/Home.vue";
const Home = () => import("@/views/Home.vue");

// const About = () => import("@/views/About.vue")
import About from "@/views/About.vue";

const Blog = () => import("@/views/Blog.vue");

const Lifecycle = () => import("@/views/Lifecycle.vue");

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
  {
    name: "lifecycle",
    path: "/lifecycle",
    component: Lifecycle,
  },
];

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
});

export default router;
