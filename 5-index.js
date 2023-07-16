"use strict";
//========= 1st task=============
let user = {
    name: "John",
    surname: "Smith",
}
user.name = "Pete";
delete user.name;
console.log(user);

//========= 2nd task=============
let schedule = {"8:30" : "get up"};
function isEmpty() {
  for (let key in schedule) {
    return false;
  }
  return true;
}
console.log(isEmpty(schedule));

//========= 3rd task=============

let salaries = {
  John: 100,
  Ann: 1500,
  Pete: 330,
};
let sum = 0;
function myCompany() {
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}
console.log(myCompany(sum));

//========= 4th task=============
let menu = {
  width: 200,
  height: 300,
  order: 5,
  licence: "510",
  title: "my menu",
};
function multiplyNumeric() {
  for (let key in menu) {
    if (typeof menu[key] === "number") {
      menu[key] *= 2;
    }
  }
  return menu;
}
console.log(multiplyNumeric(menu));
