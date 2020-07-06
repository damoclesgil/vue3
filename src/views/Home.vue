<script lang="ts">
import { defineComponent } from "vue";
import LogoAnimation from "@/components/LogoAnimation";
export default defineComponent({
  name: "Home",
  components: {
    LogoAnimation,
  }
});
</script>
<template>
  <section>
    <logo-animation />
  </section>
</template>
