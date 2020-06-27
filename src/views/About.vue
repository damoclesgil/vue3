<script lang="ts">
import Testing from "@/components/Testing";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "About",
  components: {
    Testing,
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
  <testing />
</template>
