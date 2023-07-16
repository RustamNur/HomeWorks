"use strict";
// <------1st ----->
if (-1 || 0) alert("first"); // alert("first") chiqadi , chunki
//negative numberlar ham tue qiymat qaytaradi.
// -1 ga kelganda condition true qiymatga ega bo'ladi.

if (-1 && 0) alert("second"); // && operator birinchi false qiymatni
//qaytargani sabab condition false qiymatga ega bo'ladi, chunki "0" bu falsy value.
// alert("second"); kelmaydi.

if (null || (-1 && 1)) alert("third"); // har doim || opratori && dan keyin ishlaydi
// avval && opratorni tekshirib oladi ,-1 && 1  ikkoviyam true,
// && opratorda agar hamma qiymatlar truega teng bo'lsa ohirgi true qiymatini oladi, ya'ni 1
// keyin esa null || 1 ni tekshiradi , albatta bu yerda 1 true qiymat
// alert("third"); keladi

// Javob alert("first") va alert("third").

// <------2nd ----->
let score = 95;
// if-else Conditional statement
if (score <= 100 && score >= 86) {
  console.log("A");
} else if (score <= 85 && score >= 61) {
  console.log("B");
} else if (score <= 60 && score >= 50) {
  console.log("C");
} else {
  console.log("Failed");
}

// switch/case statement
let score1 = 88;

switch (score1) {
  case 100:
  case 99:
  case 98:
  case 97:
  case 96:
  case 95:
  case 94:
  case 93:
  case 92:
  case 91:
  case 90:
  case 89:
  case 88:
  case 87:
  case 86:
    console.log("A");
    break;
  case 85:
  case 61:
    console.log("B");
    break;
  case 60:
  case 50:
    console.log("C");
    break;
  default:
    console.log("Failed");
}

// if-else Conditional statement logical(||, &&, !) va comparison operator(==,!=, <, >, <=, >=) ishlata oladi.
// Lekin swith statement bu operatorlarni ishlata olmaydi. Variable value'si
// aniq qiymatni ifoda etishi kerak. swith statement bilan ishlatish uchun "Grouping cases" qilishimiz mumkun,
// bu esa bizni codemizni uzun qilib tashledi va chiroyli chiqmidi.
//Albatta swith statement bilan ham swith(true) deb caselarni katta kichik belgilari bilan
//ishlatsak boladi lekin bunday mas'alalarda if-else qulayroq. Agar kamchilik bo'lsa inshaAllah o'rganamiz.

// <------3rd ----->

// if-else Conditional statement
let meva = prompt("Meva narxlari ", "Olma");

if (meva === "Olma") {
  alert(`${meva} narxi : "10000so'm"`);
} else if (meva === "Nok") {
  alert(`${meva} narxi : "12000so'm"`);
} else if (meva === "Tarvuz") {
  alert(`${meva} narxi : "20000so'm"`);
} else {
  alert("Bunday meva yuq");
}

// switch statement

let meva1 = prompt("Meva narxlari ", "Olma");

switch (meva1) {
  case "Olma":
    alert(`${meva1} narxi : "10000so'm"`);
    break;
  case "Nok":
    alert(`${meva1} narxi : "12000so'm"`);
    break;
  case "Tarvuz":
    alert(`${meva1} narxi : "20000so'm"`);
    break;
  default:
    alert("Bunday meva yuq");
}

// <------4th ----->

let num = prompt(
  "3ga va 5ga bo'linadigan yoki ikkovigayam Bo'linadigan sonlar!",
  "15"
);

if (num % 3 === 0 && num % 5 === 0) {
  alert("3ga ham 5ga ham bo'linadi");
} else if (num % 5 === 0) {
  alert("5ga bo'linadi");
} else if (num % 3 === 0) {
  alert("3ga bo'linadi");
} else {
  alert("Error");
}

// <------5th ----->

let browser = prompt("What is your browser?", "Edge");

if (browser === "Edge") {
  alert("You have got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Safari" ||
  browser === "Firefox" ||
  browser === "Opera"
) {
  alert("Ok we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// <------6th ----->
let login = "Employee";
let message =
  login == "Employee"
    ? "Hello" // Agar login == "Employee" bo'lsa messagemiz "Hello" bo'lsin.
    : login == "Director"
    ? "Greetings" // Agarda,login == "Director" bo'lsa messagemiz "Greetings" bo'lsin.
    : login == "" // Agarda,login == bo'sh bo'lsa messagemiz ham bo'sh bo'lsin.
    ? "No Login"
    : "";
console.log(message); // Hello
