<script lang="ts">
import { defineComponent} from 'vue'
import Container from "@/layout/Container";
import MeuComponente from "@/components/MeuComponente";

export default defineComponent({
  components: {
    Container,
    MeuComponente,
  }
})
</script>

<template>
  <container>
    <meu-componente />
  </container>
</template>
