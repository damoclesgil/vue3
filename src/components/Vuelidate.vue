<script>
import { ref } from "@vue/composition-api";
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";

export default {
  setup() {
    const password = ref("");
    const repeatPassword = ref("");

    const rules = {
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAs: sameAs(password)
      }
    };

    const v$ = useVuelidate(rules, {
      password,
      repeatPassword
    });

    function submit() {
      v$.value.$touch();
    }

    return { password, repeatPassword, v$, submit };
  }
};
</script>

<template>
  <div>
    <input
      type="password"
      v-model="password"
      class="block p-2 bg-green-100 mb-2 text-black"
    />
    <input
      type="password"
      v-model="repeatPassword"
      class="block p-2 bg-green-100 mb-2 text-black"
    />

    <button class="py-2 px-4 block">Submit</button>
  </div>
</template>
