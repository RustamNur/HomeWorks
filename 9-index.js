"use strict";
//======================================================
let user = [
    { id: 1, year: 1998, engine: 1, name: "Tico" },
    { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
    { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
    { id: 5, year: 2012, engine: 2, name: "Malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "Damas" },
    { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
  ];
  
  console.log(user.filter((value) => value.year < 2000));
  console.log(user.filter((value) => value.year <= 2010));
  console.log(user.filter((value) => value.year >= 2010));
  console.log(user.sort((a, b) => a.engine - b.engine));
  console.log(user.sort((a, b) => a.year - b.year));
  console.log(user.sort((a, b) => a.name.localeCompare(b.name)));
  
  let eski = user.filter((value) => value.year < 2000);
  eski.forEach((value) => (value.status = "Eski"));
  console.log(eski);
  
  let orta = user.filter((value) => value.year >= 2000 && value.year <= 2010);
  orta.forEach((value) => (value.status = "O'rta"));
  console.log(orta);
  
  let yangi = user.filter((value) => value.year > 2010 && value.year < 2022);
  yangi.forEach((value) => (value.status = "Yangi"));
  console.log(yangi);
  
  console.log(user);
  
  //====================================================
               
  let user1 = [
    { id: 1, year: 1998, engine: 1, name: "Tico" },
    { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
    { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
    { id: 5, year: 2012, engine: 2, name: "Malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "Damas" },
    { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
  ];
  const onDelete = (id) => {
    return user1.filter((value)=>value.id !== id)
  }
  
console.log(onDelete(5));
console.log(onDelete(1));
console.log(onDelete(7));

//===================================================================

let arr = [10, 4, 888, 99, 100,64,165,5645,875,56,1];
arr.sort((a, b) => a - b);
let max = arr.findLast((a) => a > 10);
let min = arr.find((a) => a < 10);

console.log(`max - ${max}  min - ${min}`);

//====================================================================

let arr1 = ["olma", "nok","tarvuz", "banan", "olma", "tarvuz", "olma","nok"];
console.log(arr);

let olmaSiz = arr1.filter((value) => value !== "olma");
let nokSiz = arr1.filter((value) => value !== "nok");
let tarvuzSiz = arr1.filter((value) => value !== "tarvuz");

console.log(olmaSiz);
console.log(nokSiz);
console.log(tarvuzSiz);
