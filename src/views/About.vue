<script lang="ts">
import MeuComponente from "@/components/MeuComponente";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "About",
  components: {
    MeuComponente,
    setup() {
      onMounted(() => {
        console.log("About Component");
      });
    },
  },
});
</script>
<template>
  <h1>About Page</h1>
  <input class="input" />
  <meu-componente class="hidden" />
</template>
