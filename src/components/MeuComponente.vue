<script>
import { useContasBancarias } from "@/composables/useUsers.js";

export default {
  name: "Componente",
  setup() {

    const { contas } = useContasBancarias();

    return { contas };
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
