<template>
  <div>
   <VDialog
    v-model="dialog"
    @chane="$log"
    bg-transition="fade"
    class="my-dialog"
  >
    <template #toggle="{ bind, on }">
      <button v-bind="bind" v-on="on">Show the dialog</button>
    </template>

    This is the dialog content.
    <br />
    It traps the user focus.
    <br />
    <button @click="dialog = false" aria-label="close" class="my-dialog__close">
      &times;
    </button>
  </VDialog>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { VDialog } from "vuetensils/src/components"


export default defineComponent({
  name: "InputFocus",
   components: {
    VDialog,
  },
  setup() {
    const $inputField = ref<HTMLDocument>()
    const dialog = ref(false)

    onMounted(() => console.log('mounted'))
    
    return { $inputField, dialog }


  },
});
</script>
