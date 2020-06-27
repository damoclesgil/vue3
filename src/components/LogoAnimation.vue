<template>
  <div class="flex flex-col h-screen justify-center m-auto">
    <div class="logo-calculato ml-2 overflow-hidden">
      <div class="traco-top animate__animated a-delay-2 animate__infinite"></div>
      <div class="traco-bottom "></div>
            <!-- animate__infinite animate__repeat-2 custom-animate -->
    </div>

  </div>
</template>

<script lang="ts">
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
  --easeInOutQuint : cubic-bezier(0.860, 0.000, 0.070, 1.000);
  --animate-repeat: 2;
}
.custom-animate {
    height: 40px;
    background: #336699;
    animation: animateTransform 2s alternate infinite var(--easeInOutQuint);
}
@keyframes animateTransform {
  from { transform: translate(-75%); }
  to { transform: none; }
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
