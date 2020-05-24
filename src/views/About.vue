<script lang="ts">
import MeuComponente from "@/components/MeuComponente";
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  components: {
    MeuComponente,
  },
});
</script>
<template>
  <h1>About Page</h1>
  <meu-componente />
</template>
