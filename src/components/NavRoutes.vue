<script>
/* eslint-disable */
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const navRoutes = ref([
      {
        name: "Estrutura",
        children: [
          {
            name: "Locais",
            parent: [
              {
                name: "Estrutura",
              },
              {
                name: "Lotações",
              },
              {
                name: "Rubricas",
              },
            ],
          },
          {
            name: "Lotações",
          },
          {
            name: "Rubricas",
          },
          {
            name: "Calendário",
          },
        ],
      },
      {
        name: "Trabalhadores",
        icon: "operators",
      },
    ]);

    // const getRoutes = computed(() => { return navRoutes })

    // const getRoutes = computed({
    //   get: () => {
    //     return navRoutes.value;
    //   },
    //   set: (newRoutes) => {
    //     return newRoutes;
    //   },
    // });

    // watchEffect(getRoutes, () => {
    //   console.log("eEAE");
    // });

    /*
    const main = {
      name: "main object",
      child: {
        name: "child object",
      },
      init: function() {
        this.child.parent = this;
        delete this.init;
        return this;
      },
    }.init();

    console.log(main.child.parent.name);
*/
    const setChildrens = (routes) => {
      navRoutes.value = routes;
    };
    const setParents = (routes) => {
      console.info("set");
      navRoutes.value = routes;
    };

    // ...toRefs(navRoutes)
    return { setChildrens, setParents, navRoutes };
  },
});
</script>
<template>
  <div v-for="(route, index) in navRoutes" :key="index">
    <button class="btn" @click="setParents(route.parent)">
      Voltar
    </button>
    <button class="ml-2" @click="setChildrens(route.children)">
      {{ route.name }}
    </button>
  </div>
</template>

<style lang="postcss">
.btn {
  @apply bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded;
}
.btn:hover {
  @apply bg-blue-700;
}
</style>
