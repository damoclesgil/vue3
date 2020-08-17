<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/layout/Container.vue";
import Navigation from "@/layout/Navigation.vue";

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
