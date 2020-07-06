<script lang="ts">
import RenderFunction from "@/components/RenderFunction";
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  components: {
    RenderFunction,
  },
});
</script>

<template>
  <h1>About Page</h1>
  <render-function :exibe="false"/>
</template>
