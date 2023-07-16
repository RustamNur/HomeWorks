// "use strict";

//ohirgi harfi "l" (lower-case) "true" chiqar.
let str1 = "FoziL";
let checkStr = str1.toLowerCase().endsWith("l");
console.log(checkStr);

// //===============================================

// //O'zgaruvchilarni qiymatini almashtir
let str3 = "Web";
let str4 = "Brain";
console.log(str3.replace("Web", "Brain"));
console.log(str4.replace("Brain", "Web"));

// //===============================================

// //Kabisa yilni top. Eslatma Kabisa yili 4 yilda bir marta keladi ya'ni fevral 29 bo'lganda.
let kabisaYili = +prompt("Yilni yozing", "2023");

if (kabisaYili % 4 === 0) {
  alert(kabisaYili + " : " + "Kabisa Yili");
} else {
  alert(kabisaYili + " : " + "Kabisa Yili Emas");
}

// //===============================================

// // max va min topish
let son = "467812";
console.log(
  `max - ${Math.max(...son)}, min - ${Math.min(...son)}`
);

// //===============================================

// # ni () larga aylantir
let strFozil = "#fozil#web#brain#";
let newStr =
  strFozil.replace("#fozil#web#brain#", "(fozil)") +
  "web" +
  strFozil.replace("#fozil#web#brain#", "(brain)");
console.log(newStr);

//===============================================

// katta harflarni yig'ish
let str77 = "WeBraIN";
let onlyUpper = "";
for (let i = 0; i < str77.length; i++) {
  if (str77[i] === str77.toUpperCase()[i]) {
    onlyUpper += str77[i];
  }
}
console.log(onlyUpper);

//===============================================

// sozni 10 taga kopaytir, va web sozini IT soziga almashtir
let str = "webBrain";
// console.log(str.length);
console.log(str.padEnd(9, " ").repeat(10));
console.log(str.padEnd(9, " ").repeat(10).replaceAll("web", "IT"));
