<script lang="ts">
import {
  reactive,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  ref,
} from "vue";
import BaseInput from "@/components/BaseInput";
export default defineComponent({
  name: "Home",
  components: {
    BaseInput,
  },
  setup() {
    const toggle = ref<boolean>(true);
    const me = getCurrentInstance();

    const store = inject("state");

    const form = reactive({
      firstName: "Dâmocles",
      lastName: "Gil",
      safe: false,
    });
    onMounted(() => {
      console.log("Homepage");
    });

    return { me, form, store, toggle };
  },
});
</script>
<template>
  <section class="mt-3 max-w-2xl m-auto">
    <base-input v-model="form.lastName" placeholder="Input" />
  </section>
</template>
