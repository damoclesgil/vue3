<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/layout/Container";

export default defineComponent({
  components: {
    Container,
  },
});
</script>

<template>
  <container>
    <router-view />
  </container>
</template>
