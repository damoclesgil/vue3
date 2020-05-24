<template>
  <ul class="flex items-center justify-center">
    <li class="mr-4"><router-link :to="{ name: 'home' }">Home</router-link></li>
    <li><router-link to="about">About</router-link></li>
  </ul>
</template>
<script>
import { defineComponent, provide } from "vue";

export default defineComponent({
  name: "Navigation",
  setup() {
    provide(makeSomething);

    function makeSomething() {
      alert("eoqueijo");
    }

    return { makeSomething };
  },
});
</script>
