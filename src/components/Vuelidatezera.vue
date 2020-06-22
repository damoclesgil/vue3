<template>
  <div>
    <base-input v-model="name" />

    <pre>
      {{ $v.name }}
  </div>
</template>

<script>
import { defineComponent, Vue } from "vue";
import { VuelidatePlugin } from "@vuelidate/core";
import BaseInput from "./BaseInput";
Vue.use(VuelidatePlugin);

export default defineComponent({
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    age: {
      between: between(20, 30),
    },
  },
  components: {
    BaseInput,
  },
});
</script>

<style></style>
