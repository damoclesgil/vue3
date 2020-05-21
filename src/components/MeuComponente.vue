<script>
import { useUsers } from "@/composables/useUsers.js";
import { ref } from "vue";

export default {
  name: "Componente",
  data() {
    return {
      test: ""
    };
  },
  setup() {
    const variavel = ref('texto')

    const { users } = useUsers()

    return { variavel, users };
  },
}
</script>

<template>
  <div>
    {{ variavel }}
  {{ users }}
  </div>
</template>

<style>
.eoq {
  text-align: center;
}
</style>
