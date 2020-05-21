import { reactive } from "vue";

export const useUsers = () => {
  const users = reactive([
    {
      nome: "Dâmocles",
      age: 22,
    },
    {
      nome: "Son Goku",
      age: 101,
    },
  ]);

  return {
    users,
  };
};
