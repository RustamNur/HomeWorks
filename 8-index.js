"use strict";
//============================================
// birinchi juft sonni topish
let str = "abdccaBBDCC".split("");

let toFindDuplicate = (str) =>
  str.filter((item, index) => str.indexOf(item) !== index)[0];
let duplicateElement = toFindDuplicate(str);
console.log(toFindDuplicate);
console.log(duplicateElement); // c

// === elementlarni indexi bilan indexOf qaysi tartibdaligini bilish uchun tablitsa)))
let chars = "abdccaBBDCC".split("");

chars.forEach((element, index) => {
  console.log(`${element} - ${index} - ${chars.indexOf(element)}`);
});

//============== "o" harfli elementlarni top

let arr = [
    { id: 1, name: "Fozil" },
    { id: 2, name: "Odil" },
    { id: 3, name: "Alibek" },
    { id: 4, name: "Elyor" },
    { id: 5, name: "Eldor" },
    { id: 6, name: "Donyor" },
    { id: 7, name: "John" },
    { id: 8, name: "Adam" },
    { id: 9, name: "Recep" },
  ];
  let newArr = [];
  function onSearch(text) {
    for (let i in arr) {
      if (arr[i].name.toLowerCase().includes(text)) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  console.log(onSearch("a"));