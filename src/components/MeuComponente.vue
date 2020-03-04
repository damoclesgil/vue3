<template>
  <div class="h-screen bg-gray-500 w-100 eoq m-auto">
    <div class="w-full text-2xl p-5">
      <!--

      {{ JSON.stringify(computa) }}
 -->
      <div v-for="(item, index) in array" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "@vue/composition-api";
export default {
  name: "ComponenteDaora",
  setup() {
    const array = ref(["[tag1, tag2, tag3]"]);

    let computa = computed(() => {
      let string = array.value.shift();
      // let mystring = string.replace(/^\s+|\s+$/g, "");
      // let json = string
      return parseIntArrays(string);
    });

    // function getMatches(regexp, string) {
    //   var match,
    //     matches = [];
    //   while ((match = regexp.exec(string)) !== null) matches.push(match[0]);
    //   return matches;
    // }

    // function parseIntArrays(string) {
    //   return getMatches(/\[[^\]]+\]/g, string).map(function(string) {
    //     return getMatches(/-?\d+/g, string).map(function(string) {
    //       return parseInt(string);
    //     });
    //   });
    // }

    return { array };
  }

  /**
  
  const array = ["[tag1, tag2, tag3]"]

  array.shift()

  
  arrayShift = array.shift() 

  const string = "[-5, 5, 5]")

console.log(strToArr(array.shift()));

  
  var strToArr = function(string){ return JSON.parse('[' + string + ']')}

console.log(strToArr("[-5, 5, 5], [-6, 15, 15], [7, 13, 12]"));
  
   */
};
</script>

<style>
.eoq {
  text-align: center;
}
</style>
