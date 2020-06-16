<script>
/* eslint-disable */
import { defineComponent, ref, watch, computed } from "vue";
export default defineComponent({
  setup() {
    const navRoutes = ref([
      {
        name: "Estrutura",
        children: [
          {
            name: "Locais",
            children: [
              {
                name: "Jhonson",
              },
              {
                name: "James",
              },
            ],
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

    const backRoutes = ref([]);

    const setChildrens = (routes) => {
      navRoutes.value = routes;
    };
    const setParents = () => {
      navRoutes.value = backRoutes.value;
    };

    function setParent(o) {
      if (o.children != undefined) {
        for (n in o.children) {
          o.children[n].parent = o;
          setParent(o.children[n]);
        }
      }
    }

    // onMounted(() => {
    // console.log(setParent(navRoutes.value));
    // let children2 = navRoutes.value.children["children2"];
    // console.log(children2.parent.name);
    // });

    const getRoutes = computed(() => {
      setParent(navRoutes.value);
    });

    watch(navRoutes, (newValue, oldValue) => {
      backRoutes.value = oldValue;
    });

    return { setChildrens, setParents, setParent, navRoutes };
  },
});
</script>
<template>
  <div v-for="(route, index) in navRoutes" :key="index">
    <button class="btn">
      Set Parent
    </button>
    <button class="btn -sm ml-2" @click="setChildrens(route.children)">
      Set children
    </button>
    <pre class="text-xs">
    {{ route }}
    </pre>
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
