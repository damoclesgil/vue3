<template>
  <div class="flex items-center">
    <div class="size mt-2 hidden">
      <svg
        fill="none"
        viewBox="0 0 8 8"
        class="w-full h-full animate__fadeInBottomLeft"
      >
        <path d="M7.025.953v7.006H0v-2.72h4.297V.952h2.728z" fill="#fff" />
      </svg>
    </div>
    <div class="logo-calculato ml-2 overflow-hidden">
      <div
        class="traco-top animate__animated a-delay-2 animate__repeat-2"
      ></div>
      <div
        class="traco-bottom animate__animated a-delay-1 animate__repeat-2"
      ></div>
      <!--  
                class="traco-bottom animate__animated animate__fadeInLeft a-delay-1 animate__repeat-2"
      -->
      <!-- animate__infinite animate__repeat-2 -->
    </div>

    <!-- <svg
      class="hidden"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; display: block;"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect
        stroke="#5699d2"
        x="20"
        y="20"
        width="60"
        height="60"
        stroke-width="20"
        fill="none"
      ></rect>
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        stroke="#1d3f72"
        stroke-width="20"
        stroke-lincap="undefined"
        fill="none"
      >
        <animate
          attributeName="stroke-dasharray"
          repeatCount="indefinite"
          dur="4s"
          keyTimes="0;0.5;1"
          values="24 216;120 120;24 216"
        ></animate>
        <animate
          attributeName="stroke-dashoffset"
          repeatCount="indefinite"
          dur="4s"
          keyTimes="0;0.5;1"
          values="120;"
        ></animate>
      </rect>
    </svg> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "animate.css";

export default defineComponent({
  name: "LogoAnimation",
  setup() {
    return {};
  },
});
</script>
<style>
:root {
  --animate-duration: 2s;
  --animate-repeat: 2;
}
.size {
  width: 150px;
  height: 150px;
}
.logo-calculato {
  width: 150px;
  height: 150px;
  position: relative;
}
.logo-calculato .traco-top {
  position: absolute;
  width: 50px;
  height: 150px;
  right: 0;
  top: 0;
  background-color: #fff;
}
.logo-calculato .traco-bottom {
  position: absolute;
  width: 150px;
  height: 50px;
  left: 0;
  background-color: #fff;
  bottom: 0;
}
.a-delay-1 {
  animation-delay: 500ms;
  animation-duration: 3s;
  transition-property: width;
  transition-timing-function: ease-in-out;
}
.a-delay-2 {
  animation-delay: 1s;
  animation-duration: 3s;
  transition-property: width;
  transition-timing-function: ease-in-out;
}
/*
:root {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}
.animate__repeat-2 {
  -webkit-animation-iteration-count: calc(1 * 2);
  animation-iteration-count: calc(1 * 2);
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 2);
  animation-iteration-count: calc(var(--animate-repeat) * 2);
}
@-webkit-keyframes fadeInBottomLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInBottomLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInBottomLeft {
  -webkit-animation-name: fadeInBottomLeft;
  animation-name: fadeInBottomLeft;
}
.animate_animated {
  animation-duration: 2s;
}
*/

/* animation-iteration-count: infinite; */
</style>
