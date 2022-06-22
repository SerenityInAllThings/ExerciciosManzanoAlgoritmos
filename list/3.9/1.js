import { isNumber } from "../utils";

const A = (a, b) => {
  if (!isNumber(a) || !isNumber(b))
    throw new Error("A and B need to be numeric");

  return a + (b * 1) / 3;
};

const B = (a) => {
  if (!isNumber(a)) throw new Error("A needs to be numeric");

  return 43 * (55 / (30 + 2 * a));
};

const C = (x) => {
  if (!isNumber(x) || x < -1)
    throw new Error("X needs to be numeric and over -1");

  const left = (2 * Math.pow(x, 2) - 3 * Math.pow(x, x + 1)) / 2;
  const right = Math.sqrt(x + 1) / x;
  return left + right;
};

const D = (h) => {
  if (!isNumber(h)) throw new Error("H needs to be numeric");
  return 2 * h - ((45 / 3) * h - 4 * h * (3 - h));
};

const E = (x, y, w) => {
  const toBeSquared = Math.pow(-6, x) + 2 * y;
  if (toBeSquared < 0) throw new Error("Either X is too high or Y is too low");
  return Math.sqrt(toBeSquared) / Math.pow(3, w);
};

const F = (a, b, c) => {
  const delta = Math.pow(b, 2) - 4 * a * c;
  if (delta < 0) throw new Error("Negative delta");
  if (delta == 0) {
    return -b / (2 * a);
  } else {
    const deltaSqrt = Math.sqrt(delta);
    const x1 = -b + deltaSqrt / (2 * a);
    const x2 = -b - deltaSqrt / (2 * a);
    return { x1, x2 };
  }
};
