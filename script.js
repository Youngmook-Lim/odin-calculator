"use strict";

const btnAdd = document.querySelector(".btn--add");
const btnSub = document.querySelector(".btn--sub");
const btnMul = document.querySelector(".btn--mul");
const btnDiv = document.querySelector(".btn--div");

const calcAdd = (x, y) => x + y;
const calcSub = (x, y) => x - y;
const calcMul = (x, y) => x * y;
const calcDiv = (x, y) =>
  Math.round((x / y + Number.EPSILON) * 100000) / 100000;
const operate = (op, x, y) => {
  if (op === "+") return calcAdd(x, y);
  if (op === "-") return calcSub(x, y);
  if (op === "×") return calcMul(x, y);
  if (op === "÷") return calcDiv(x, y);
};

btnDiv.addEventListener("click", function (e) {
  console.log(e.target.textContent);
  console.log(operate(e.target.textContent, 5, 4));
});
