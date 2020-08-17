<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

<template>
  <h1>About Page</h1>
  <render-function :exibe="false" />
</template>
