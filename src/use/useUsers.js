import { ref } from "vue";

export const useUsers = () => {
  let users = ref(["Primeiro Item", "Segundo Item", "Terceiro Item"]);

  return { users };
};
