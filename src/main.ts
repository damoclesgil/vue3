import { createApp } from "vue";
import router from "./router/index";
import { globalState } from "./store";
import App from "./App.vue";
import "./assets/tailwind.css";
// import "tailwind/tailwind.css";

const app = createApp(App);
app.provide("state", globalState);
app.use(router);
app.mount("#app");
