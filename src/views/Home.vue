<script lang="ts">
import { defineComponent } from "vue";
import NavRoutes from "@/components/NavRoutes";
export default defineComponent({
  name: "Home",
  components: {
    NavRoutes,
  },
});
</script>
<template>
  <section class="mt-3 max-w-2xl m-auto">
    <nav-routes />
  </section>
</template>
