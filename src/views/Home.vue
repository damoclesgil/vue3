<script lang="ts">
import {
  reactive,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
} from "vue";
import BaseInput from "@/components/BaseInput";
export default defineComponent({
  name: "Home",
  components: {
    BaseInput,
  },
  setup() {
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

    return { me, form, store };
  },
});
</script>
<template>
  <section class="mt-3 max-w-2xl m-auto">
    <input class="input" v-model="form.firstName" />
    <div class="flex">
      <label for="safe">Safe Or No Safe?</label>
      <input type="checkbox" id="safe" v-model="form.safe" />
    </div>
    <base-input v-model="form.lastName" class="hidden" />
  </section>
</template>
