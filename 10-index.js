"use strict";
let richMen = [
  { id: 1, name: "Elon Musk", age: 52, source: "Tesla", country: "USA" },
  {
    id: 2,
    name: "Bernard Arnault",
    age: 74,
    source: "LVMH",
    country: "France",
  },
  { id: 3, name: "Jeff Bezos", age: 59, source: "Amazon", country: "USA" },
  { id: 4, name: "Larry Ellison", age: 78, source: "Oracle", country: "USA" },
  { id: 5, name: "Bill Gates", age: 67, source: "Microsoft", country: "USA" },
  {
    id: 6,
    name: "Warren Buffet",
    age: 92,
    source: "Berkshire Hathaway",
    country: "USA",
  },
  {
    id: 7,
    name: "Mark Zuckerberg",
    age: 39,
    source: "Facebook",
    country: "USA",
  },
  { id: 8, name: "Larry Page", age: 50, source: "Google", country: "USA" },
  {
    id: 9,
    name: "Steve Ballmer",
    age: 67,
    source: "Microsoft",
    country: "USA",
  },
  {
    id: 10,
    name: "Carlos Slim Helu",
    age: 83,
    source: "Telecom",
    country: "Mexico",
  },
];

// CREATE======================================================================
// ============CREATE a new value

// const addRichMan = () => {
//   return (richMen = [
//     ...richMen,
//     {
//       id: richMen.length + 1,
//       name: "Sergey Brin",
//       age: 49,
//       source: "Google",
//       country: "USA",
//     },
//   ]);
// };
// addRichMan();
// console.log(richMen); // // add a new rich man to Forbes billionaire list

// ===== CREATE a new catagory

// const addCatagory = (young) => {
//     let res = richMen.filter(value => value.age <= young);
//     let younger = res.forEach(value => value.status = "Young");
//    return younger;
// }
// addCatagory(50);
// console.log(richMen);

// const addCatagory = (old) => {
//     let res = richMen.filter(value => value.age >= 70 && value.age <= old);
//     let older = res.forEach(value => value.status = "Older");
//    return older;
// }
// addCatagory(100);
// console.log(richMen);

// READ=============================================================================

// // READ all data.

// richMen.map(({ id, name, age, source, country }) => {
//   console.log(id, name, age, source, country);  // Read all richmen list in Forbes
// });

// =====READ only which is needed data

// const getFilter = (key) => {
//     let result = richMen.filter(value => value.name.toLowerCase().includes(key.toLowerCase()));
//     richMen = result;
// };
// getFilter("Jeff")
// console.log(richMen); // Read data only one who is needed you

// const getFiltered = ({ key, value }) => {
//     let res = richMen.filter(item => `${item[key]}`.toLowerCase().includes(`${value}`.toLowerCase()));
//     richMen = res;
// }
//  getFiltered({ key: "id", value: 3 });
// getFiltered({ key: "name", value: "Elon" });
// console.log(richMen);

// =====READ same datas

// const sameData = (key) => {
//     let result = richMen.filter(value => value.country === key);
//     richMen = result;
// }
// // sameData("USA");
// sameData("Mexico");
// console.log(richMen); // // Read who is needed by catagory

// UPDATE DATA.===================================================================

// const updateData = (billionaire) => {
//   let updateStatus = richMen.map((value) =>
//     value.id === billionaire.id
//       ?  { ...value, [billionaire.type] : billionaire.item}
//       : value
//     );
//     richMen = updateStatus
// };
// updateData({ id: 4, type: "name", item: "Boyvachcha" });

// console.log(richMen);
