var array = ["[tag1, tag2, tag3]"];
var strToArr = function(string) {
  return JSON.parse("[" + string + "]");
};

console.log(array.shift());

console.log(strToArr(array.shift()));
// console.log(strToArr("[-5, 5, 5], [-6, 15, 15], [7, 13, 12]"));
