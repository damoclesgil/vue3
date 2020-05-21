<script>
import { useUsers } from "@/composables/useUsers";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Componente",
  data() {
    return {
      test: ""
    };
  },
  setup() {
    const variavel = ref("texto");

    const { users } = useUsers();

    return { variavel, users };
  }
})
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
