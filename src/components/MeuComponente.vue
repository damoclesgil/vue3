<script>
import { useContasBancarias } from "@/composables/useContasBancarias.js";

export default {
  name: "Componente",
  setup() {

    const { contas } = useContasBancarias();

    const eoq = () => {
      console.log('pravo')
    }

    return { contas, eoq };
  }
};
</script>

<template>
<div>
    {{ contas }}
</div>
</template>

<style>
.eoq {
  text-align: center;
}
</style>
