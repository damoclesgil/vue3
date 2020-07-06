<template>
  <div>
    <base-input v-model="$v.name.$model" />

    <pre>
      {{ $v.name }}
      </pre>
  </div>
</template>

<script>
import { defineComponent, App } from "vue";
import { VuelidatePlugin } from "@vuelidate/core";
import { required, minLength, between } from "@vuelidate/validators";
import BaseInput from "./BaseInput";
App.use(VuelidatePlugin);

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
