<script lang="ts">
import { defineComponent } from "vue";
import LogoAnimation from "@/components/LogoAnimation";
export default defineComponent({
  name: "Home",
  components: {
    LogoAnimation,
  },
});
</script>
<template>
  <section class="mt-3 max-w-2xl m-auto">
    <logo-animation />
  </section>
</template>
