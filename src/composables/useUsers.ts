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

  function eoqueijo() {
    window.addEventListener("click", (e) => {
      console.log(e.target);
    });
  }

  return {
    users,
    eoqueijo,
  };
};
