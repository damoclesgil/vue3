<template>
  <div class="h-screen bg-gray-900 w-100 text-center m-auto">
    <div class="w-full text-2xl font-base text-white">
      <slot />
    </div>
  </div>
</template>
<script>
import { defineComponent, provide } from "vue";

export default defineComponent({
  setup() {
    provide(makeSomething);

    function makeSomething() {
      alert("eoqueijo");
    }

    return { makeSomething };
  },
});
</script>
