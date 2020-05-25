import { RouteRecordRaw } from "vue-router";

// import Home from "@/views/Home.vue";
const Home = () => import("@/views/Home.vue");

const About = () => {
  console.log("fetching component");
  return import("@/views/About.vue");
};
// import Blog from "@/views/Blog.vue";
const Blog = () => import("@/views/Blog.vue");

export const routes: RouteRecordRaw[] = [
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
