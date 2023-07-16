"use strict";

// No1=====================================================
// object keylarini toping
let obj = {
  id: 1,
  name: "WebBrain",
};
for (let key in obj) {
  console.log(key);
}
// chiqish
// id,name
// no2======================================================
// object valuelarining raqamga teng keylarini toping
let obj1 = {
  id: 1,
  name: "WebBrain",
};

for (let key in obj1) {
  if (typeof obj1[key] === "number") {
    console.log(key);
  }
}

// chiqish
// id
// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
let obj2 = {
  id: 1,
  name: "WebBrain",
  offline: true,
  online: true,
  individual: false,
};

let arrBooEntry = Object.entries(obj2).filter(
  ([key, value]) => value === true || value === false
);

let newObj2 = Object.fromEntries(arrBooEntry);
console.log(newObj2);

// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }
let person = {
  id: 1,
  name: "Odil",
  age: 78,
  child: {
    id: 1,
    name: "Ali",
    age: 48,
    child: {
      id: 1,
      name: "Umar",
      age: 20,
    },
  },
};
let sum = 0;
while (true) {
  if (person) {
    sum += person.age;
  } else break;
  person = person.child;
}
console.log(sum);
// chiqish
// 146

// talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar parol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name  xato chiqsin
let student = {
  id: 1,
  name: "Umar",
  surname: "Ismoilov",
  ielts: 5.5,
  student: true,
  parol: 101,
};

function Kirish(parol, name) {
  if (parol === student.parol && name === student.name) {
    return "Hush Kelibsiz!";
  } else {
    return "Xato";
  }
}

console.log(Kirish(101, "Umar"));
