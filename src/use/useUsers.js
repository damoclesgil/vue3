import { ref } from "vue";

export const useUsers = () => {
  let users = ref(["User 1", "User dois", "User 3"]);

  return { users };
};
