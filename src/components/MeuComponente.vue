<template>
  <container>
    {{ users }}
    <button @click="onClick">Click</button>
    {{ isClicked }}
  </container>
</template>

<script>
import Container from "../layout/Container";
import { useUsers } from "@/use/useUsers.js";
import { ref } from 'vue';
export default {
  name: "Componente",
  components: {
    Container
  },
  setup() {
    const { users } = useUsers();
     const isClicked = ref(false)

    const onClick = () => {
      isClicked.value = !isClicked.value
    }

    return { users, onClick, isClicked };
  }
};
</script>

<style>
.eoq {
  text-align: center;
}
</style>
