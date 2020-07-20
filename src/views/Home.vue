<script lang="ts">
import { defineComponent } from "vue";
import PlayGround from '../components/PlayGround.vue'
export default defineComponent({
  name: "Home",
  components: {
    PlayGround
  }
});
</script>
<template>
  <section>
    <play-ground/>
  </section>
</template>
