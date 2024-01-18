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

const calcAverage = function (firstScore, secondScore, thirdScore) {
  const avrScore = (firstScore + secondScore + thirdScore) / 3;
  return avrScore;
};

const avrDolphineScore = calcAverage(23, 34, 27);
const avrKoalasScore = calcAverage(85, 54, 41);

const checkWinner = function (avrDolphine, avrKoalas) {
  if (avrDolphine >= avrKoalas * 2) {
    console.log(`Dolphine wins (${avrDolphine} vs ${avrKoalas})`);
  } else if (avrKoalas >= avrDolphine * 2) {
    console.log(`Koalas wins (${avrKoalas} vs ${avrDolphine})`);
  } else if (avrDolphine === avrKoalas) {
    console.log(`There is can't be draw (${avrDolphine} vs ${avrKoalas})`);
  } else {
    console.log("There is no winners!");
  }
};

checkWinner(avrDolphineScore, avrKoalasScore);
