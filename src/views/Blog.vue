<script lang="ts">
import { defineComponent } from "vue";
import RenderFunction from "../components/RenderFunction";
export default defineComponent({
  name: "Blog",
  components: {
    RenderFunction,
  },
});
</script>
<template>
  <section>
    <h1>
      Blog Page
    </h1>
    <render-function />
  </section>
</template>
