<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/layout/Container";
import Navigation from "@/layout/Navigation";

export default defineComponent({
  components: {
    Container,
    Navigation,
  },
});
</script>

<template>
  <container>
    <navigation class="hidden" />
    <router-view />
  </container>
</template>
