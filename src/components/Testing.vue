<script lang="ts">
import { defineComponent, onMounted, ref,  watchEffect } from "vue";
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
    outraPropriedade: {
      type: String,
      default: 'Apenas una property'
    }
  },
  setup(props, { attrs }) {
    const toogle = ref<Boolean>(false);
    const $element = ref<HTMLDivElement>();


    onMounted(() => {
      console.log(props.propriedade);
      console.log(attrs);

      watchEffect([props.outraPropriedade, props.propriedade], ([foo, bar], [prevFoo, prevBar]) => {
            console.log(foo)
            console.log(bar)
            console.log(prevBar)
            console.log(prevFoo)
      })
    });

    return { toogle, $element };
  },
});
</script>

<template>
  <div class="elemento-purificador text-white">
    Eu sou um elemento {{ variavel }}
  </div>
</template>
