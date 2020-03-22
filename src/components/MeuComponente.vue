<template>
  <container>
    {{ users }}
  </container>
</template>

<script>
import Container from "../layout/Container";
import { useUsers } from "@/use/useUsers.js";
export default {
  name: "Componente",
  components: {
    Container
  },
  setup() {
    const { users } = useUsers();

    return { users };
  }
};
</script>

<style>
.eoq {
  text-align: center;
}
</style>
