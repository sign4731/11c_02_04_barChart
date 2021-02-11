"use strict";

document.addEventListener("DOMContentLoaded", readArray);

let arr = ["20", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "32", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "20"];
let myRandom;
function readArray() {
  console.log("Reading array");
  console.log(arr);
  let i;
  let barNumber = 0;
  let counter = 0;

  for (i = 0; i <= 40; i += 1) {
    console.log(arr[i]);
    barNumber++;
    console.log(barNumber);
    document.querySelector("#bar" + barNumber).style.height = `${arr[i]}px`;
    // newBars();
  }
}

// function newBars() {
//   console.log("New Bars");
//   arr.splice(39);
//   arr.unshift((myRandom = Math.floor(Math.random() * 32 + 1)));
//   console.log(arr);
// }
