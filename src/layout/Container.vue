<template>
  <div class="h-screen bg-gray-900 w-100 text-center m-auto">
    <div class="w-full text-2xl p-5 font-base text-white">
      <slot />
    </div>
  </div>
</template>
<script>
import {provide} from 'vue'

export default {
  setup(){
    provide(makeSomething)

  function makeSomething(){
    alert('eoqueijo')
  }

    return { makeSomething }
  }
  
}
</script>