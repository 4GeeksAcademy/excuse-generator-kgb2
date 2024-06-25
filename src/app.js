/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];
const random = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
const excuse = document.querySelector(".excuse");
window.onload = function() {
  //write your code here
  excuse.innerHTML = `${random(who)} ${random(action)} ${random(what)} ${random(
    when
  )}`;
  console.log("Hello Rigo from the console!");
};
