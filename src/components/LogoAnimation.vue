<template>
  <div class="flex flex-col h-screen justify-center items-center m-auto overflow-hidden">
  

<div class="relative">
<div class="loader-circle"></div>
<div class="loader-line-mask">
      <div class="loader-line"></div>
</div>

<svg  class="text-primary" width="40" height="40" viewBox="0 0 40 40">
    <rect x="25" width="15" height="40" fill="currentColor">
      <!-- <animate attributeName="opacity" dur="5s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate> -->
    </rect>
    <rect y="25" width="30" height="15" fill="currentColor">
      <!-- <animate attributeName="opacity" dur="5s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate> -->
    </rect>
</svg> 


</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LogoAnimation",
  setup() {
    const duration = ref<String>('5s')
    const $path = ref<HTMLDocument>()

    function getLengthPath(){
      let tam = $path.value.getTotalLength()
      console.log(tam)
    }
   

    return { $path, duration, getLengthPath };
  },
});
</script>
<style>
.text-primary{
  color: #005CFF;
}
.loader-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 92, 255, 0.1);
  margin-left: -45px;
  margin-top: -45px;
}
.loader-line-mask {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 45px;
  height: 60px;
  margin-left: -45px;
  margin-top: -45px;
  overflow: hidden;
  transform-origin: 45px 45px;
  animation: rotate 8s infinite linear;
}
.loader-line-mask .loader-line {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 92, 255, 0.5);
}
@keyframes rotate{ 0% {-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg);} 100% {-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg);}}

</style>

<!-- watchEffect(() => {
      refetch({ id: idRoute.value })
})-->