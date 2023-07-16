"use strict";
// <-----------1st--------------->
// 1'dan 5'gacha bo'lgan sonlarni juft yoki toq son ekanligini aniqlash
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i, "is even");
  } else {
    console.log(i, "is odd");
  }
}

// <-----------2nd--------------->

let str = "WebBraIN";
let onlyUpper1 = str.replace(/[a-z]/g, "");
let newStr = "";

for (let i = 0; i < onlyUpper1.length; i++) {
  newStr += onlyUpper1[i];
}

console.log(newStr);

// <-----------3rd--------------->

let str3 = "WebBrainAcadamyA";
let regex = /[aA]/g;
let aniqAharf = str3.match(regex);

for (let i = 0; i < aniqAharf.length; i++) {
  console.log(i, aniqAharf[i]);
}

// <-----------4th--------------->

let str2 = "WebBrain";
let newStr2 = "";

for (let i = str2.length - 1; i >= 0; i--) {
  newStr2 += str2[i];
}
console.log(newStr2);
