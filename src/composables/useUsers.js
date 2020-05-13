import {ref } from "vue";

export const useUsers = () => {
  let users = ref(["User 1", "User dois", "User 3"]);

  return { users };
};

/** How to Use **

import { useUsers } from "@/composables/useUsers.js";
export default {
  name: "Componente",
  setup() {
    const { users } = useUsers();

    return { users };
  }
}

*/