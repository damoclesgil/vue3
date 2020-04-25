import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

if (process.env.NODE_ENV === "development") {
  require("./miragejs/server").makeServer();
}
// App = createApp({
//   setup() {
//     const count = ref(1);

//     count.value++;
//   }
// }).mount("#app");

createApp(App).mount("#app");
