<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "Testing",
  data: () => ({
    variavel: "123123",
  }),
  props: {
    propriedade: {
      type: String,
      default: "12312",
    },
  },
  setup(_, { attrs }) {
    const toogle = ref<Boolean>(false);

    onMounted(() => {
      console.log(_.propriedade);
      console.log(attrs);
    });

    return { toogle };
  },
});
</script>

<template>
  <div class="elemento-purificador text-white">
    Eu sou um elemento {{ variavel }}
  </div>
</template>
