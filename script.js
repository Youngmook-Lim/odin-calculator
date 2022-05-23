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
let activeNum = "";

const operation = {
  op: "",
  values: [],
  answer: "",
};

// Operator Functions //
const calcAdd = (x, y) => x + y;
const calcSub = (x, y) => x - y;
const calcMul = (x, y) => x * y;
const calcDiv = (x, y) => {
  if (y === 0) return;
  return Math.round((x / y + Number.EPSILON) * 100000) / 100000;
};
const operate = (op, x, y) => {
  if (op === "+") return calcAdd(x, y);
  if (op === "-") return calcSub(x, y);
  if (op === "×") return calcMul(x, y);
  if (op === "÷") return calcDiv(x, y);
};

const deleteChar = function () {
  if (!screenCalc.textContent || screenRes.textContent) return;
  const screenCalcTemp = screenCalc.textContent.replace(/ /g, "");

  if (!isNaN(+screenCalcTemp[screenCalcTemp.length - 1])) {
    if (!activeNum) {
      activeNum = operation.values[0].toString();
      operation.values.shift();
    }
    activeNum = activeNum.slice(0, -1);
    screenCalc.textContent = screenCalc.textContent.slice(0, -1);
  } else {
    operation.op = "";
    screenCalc.textContent = screenCalc.textContent.slice(0, -3);
  }
};

const clearOperation = function () {
  operation.op = "";
  operation.values = [];
  operation.answer = "";
};

const clearText = function () {
  screenCalc.textContent = "";
  screenRes.textContent = "";
};

btns.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn");
  if (!btn) return;
  const btnText = btn.textContent;

  if (!isNaN(+btnText) || btnText === ".") {
    if (btnText === "." && (activeNum.includes(".") || !activeNum)) return;
    if (operation.answer) return;
    screenCalc.textContent += btnText;
    activeNum += btnText;
  } else if (btnText === "DELETE") {
    deleteChar();
  } else if (btnText === "CLEAR") {
    clearText();
    clearOperation();
  } else if (btnText === "=") {
    if (!operation.op) return;
    if (!activeNum) return;
    if (+activeNum === 0) {
      alert("You can't do that LOL");
      return;
    }
    screenCalc.textContent += ` ${btnText} `;
    operation.values.push(+activeNum);
    activeNum = "";
    const answer = operate(
      operation.op,
      operation.values[0],
      operation.values[1]
    );
    console.log(answer);
    screenRes.textContent = answer;
    clearOperation();
    operation.answer = answer;
  } else {
    if (!operation.answer) {
      screenCalc.textContent += ` ${btnText} `;
      operation.values.push(+activeNum);
      activeNum = "";
      operation.op = btnText;
    } else {
      clearText();
      const temp = operation.answer;
      clearOperation();
      screenCalc.textContent += `${temp} ${btnText} `;
      operation.values.push(temp);
      activeNum = "";
      operation.op = btnText;
    }
  }

  console.log(operation);
  console.log(activeNum);
});

const init = function () {
  clearText();
  clearOperation();
};

init();
