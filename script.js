"use strict";

const calcAdd = function (x, y) {
  return x + y;
};

const calcSub = function (x, y) {
  return x - y;
};

const calcMul = function (x, y) {
  return x * y;
};

const calcDiv = function (x, y) {
  return Math.round((x / y + Number.EPSILON) * 100000) / 100000;
};

const operate = function (operator, x, y) {
  if (operator === "+") {
    return calcAdd(x, y);
  }
  if (operator === "-") {
    return calcSub(x, y);
  }
  if (operator === "*") {
    return calcMul(x, y);
  }
  if (operator === "/") {
    return calcDiv(x, y);
  }
};
