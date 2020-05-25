import { reactive } from "vue";

export const globalState = reactive({
  currentUser: {
    id: "123",
    name: "Son Goku",
  },
});
