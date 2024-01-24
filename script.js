"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // Functions

// function logger() {
//   console.log("I'm Khudoyberdi");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 3);
// console.log(appleJuice);

// Function Decloration
// function calcAge1(birthYear) {
//   const age = 2024 - birthYear;
//   return age;
// }

// const age1 = calcAge1(2007);
// console.log(age1);

// Function Expression
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// const age2 = calcAge2(2007);
// console.log(age1, age2);

// Arrow function

// const calcAge3 = (birthYear) => 2024 - birthYear;

// const age = calcAge3(2007);
// console.log(age);

// const yearsUntilRetirment = (birthYear, firstName, lastName) => {
//   const age1 = 2024 - birthYear;
//   const retirment = 60 - age1;
//   return `${firstName} ${lastName} retires in ${retirment} years`;
// };

// console.log(yearsUntilRetirment(2007, "Khudoyberdi", "Shamsiyev"));\

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and with ${orangePieces} pieces of orange`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

// First  coding challenge for with module

// const calcAverage = function (firstScore, secondScore, thirdScore) {
//   const avrScore = (firstScore + secondScore + thirdScore) / 3;
//   return avrScore;
// };

// const avrDolphineScore = calcAverage(23, 34, 27);
// const avrKoalasScore = calcAverage(85, 54, 41);

// const checkWinner = function (avrDolphine, avrKoalas) {
//   if (avrDolphine >= avrKoalas * 2) {
//     console.log(`Dolphine wins (${avrDolphine} vs ${avrKoalas})`);
//   } else if (avrKoalas >= avrDolphine * 2) {
//     console.log(`Koalas wins (${avrKoalas} vs ${avrDolphine})`);
//   } else if (avrDolphine === avrKoalas) {
//     console.log(`There is can't be draw (${avrDolphine} vs ${avrKoalas})`);
//   } else {
//     console.log("There is no winners!");
//   }
// };

// checkWinner(avrDolphineScore, avrKoalasScore);

// This is the tipical variables

// const friend1 = "Michael";
// const friend2 = "John";
// const friend3 = "Peter";

// // Arrays

// const friends = ["Michael", "John", "Peter"];
// console.log(friends);

// const years = new Array(1991, 2008, 2007, 1984);

// console.log(`My friend is ${friends[1]} he was born in ${years[1]}`);

// const firstName = "Khudoyberdi";

// const khudoyberdi = [
//   firstName,
//   "Shamsiyev",
//   2024 - 2007,
//   "student of high-school",
//   friends,
// ];
// console.log(
//   `I'm ${khudoyberdi[0]} ${khudoyberdi[1]} and I'm ${khudoyberdi[2]} years old, I'm not working, I'm just ${khudoyberdi[3]}, and my friends is ${khudoyberdi[4]}`
// );

// // Exercise

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const years = [1991, 1962, 1984, 2001, 2010, 2018];

// console.log(calcAge(years[4]));

// New coding challenge

// const total = bill + tip;

// const calcTip = function (bill) {
//   if (bill <= 50 || bill <= 300) {
//     return (bill / 100) * 15;
//     // console.log(`Bill: ${bill}, tip: ${15}`);
//   } else {
//     return (bill / 100) * 20;
//     // console.log(`Bill: ${bill}, tip: ${20}`);
//   }
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(`Bill: ${bills}, tips: ${tips}, total: ${totals}`);

// Object propeties

// const kh = {
//   firstName: "Khudoyberdi",
//   lastName: "Shamsiyev",
//   age: 2024 - 2007,
//   job: "Student",
//   friends: ["Michael", "John", "Thomas"],
// };

// console.log(kh);
// console.log(kh.lastName);

// const interestedIn = prompt(
//   "What you want to know about Khudoyberdi? Choose between firstName, lastName, age, job, friends"
// );

// if (kh[interestedIn]) {
//   console.log(kh[interestedIn]);
// } else {
//   console.log("There is no data about it");
// }

// kh.location = "Uzbekistan";
// kh["instagram"] = "@kh.shmsv__";

// console.log(kh);

// console.log(
//   `${kh["firstName"]} has ${kh.friends.length} friends and his best friend called ${kh.friends[0]}`
// );

const kh = {
  firstName: "Khudoyberdi",
  lastName: "Shamsiyev",
  birthYear: 2007,
  job: "student",
  friends: ["Michael", "John", "Thomas"],
  driversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // }

  // calcAge: function () {
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.age}-tears old ${
      this.job
    }, and he has ${this.driversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(kh.calcAge());
console.log(kh.age);
// console.log(kh["calcAge"](2007));

console.log(kh.getSummary());
