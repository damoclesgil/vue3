<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Lifecycle",
  beforeMount(){
    console.log('Antes de montar')
  },
  mounted(){
    console.log('Montado')
  },
  beforeUnmount(){
    console.log('Antes de Desmontar')
  },
  unmounted(){
    console.log('Desmontado!')
  }
});
</script>
<template>
  <section>
  </section>
</template>
