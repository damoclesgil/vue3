<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
});
</script>
<template>
  <input class="input" />
</template>
<style lang="postcss">
.input {
  @apply bg-white border text-black border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal;
}
.input:focus {
  @apply shadow-outline outline-none;
}
</style>
