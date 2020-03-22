import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

if (process.env.NODE_ENV === "development") {
  require("./miragejs/server").makeServer();
}

createApp(App).mount("#app");
