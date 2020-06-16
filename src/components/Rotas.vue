<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute();

    onMounted(() => {
      console.log(route.name);
    });

    return {};
  },
});
</script>

<template>
  <div class="elemento-purificador text-white">
    Tentando acessar a rota pelo setup
  </div>
</template>
