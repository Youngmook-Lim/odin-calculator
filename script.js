"use strict";

// QuerySelectors for DOM Elements //

const btns = document.querySelector(".btns");
const btnAdd = document.querySelector(".btn--add");
const btnSub = document.querySelector(".btn--sub");
const btnMul = document.querySelector(".btn--mul");
const btnDiv = document.querySelector(".btn--div");
const btnNum = document.querySelector(".btn--num");
const screenCalc = document.querySelector(".screen-calc");
const screenRes = document.querySelector(".screen-res");

// Operator Functions //
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

const checkLastChar = function () {
  const screenCalcTemp = screenCalc.textContent.replace(/ /g, "");

  if (!isNaN(+screenCalcTemp[screenCalcTemp.length - 1])) {
    screenCalc.textContent = screenCalc.textContent.slice(0, -1);
  } else screenCalc.textContent = screenCalc.textContent.slice(0, -3);
};

btns.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn");
  if (!btn) return;
  const btnText = btn.textContent;

  if (!isNaN(+btnText)) {
    screenCalc.textContent += btnText;
  } else if (btnText === "DELETE") {
    checkLastChar();
  } else if (btnText === "CLEAR") {
    screenCalc.textContent = "";
    screenResCalc.textContentt = "";
  } else screenCalc.textContent += ` ${btnText} `;
});

const init = function () {
  screenCalc.textContent = "";
  screenRes.textContent = "";
};

init();
