const prompt = require("prompt-sync")({});

const runExercise = (name, exercise) => {
  printExerciseStart(name);
  exercise();
  printExerciseEnd(name);
};

const printExerciseStart = (name) => {
  console.log(`\nEXERCISE ${name.toUpperCase()} START\n`);
};

const printExerciseEnd = (name) => {
  console.log(`\nEXERCISE ${name.toUpperCase()} END`);
};

const readNumber = (message) => {
  const promptMessage = message || "enter a number";
  const value = prompt(promptMessage + " ");
  const parsed = Number(value);
  if (isNumber(parsed)) return parsed;
  return readNumber(message);
};

const readPositiveNumber = (message) => {
  const number = readNumber(message);
  if (number > 0) return number;
  else {
    console.log("Number needs to be positive");
    return readFloat(message);
  }
};

const readInt = (message) => {
  const number = readNumber(message);
  if (Number.isInteger(number)) return number;
  else {
    console.log("Number needs to be an integer");
    return readInt(message);
  }
};

const readPositiveInt = (message) => {
  const int = readInt(message);
  if (int > 0) return int;
  else {
    console.log("Number needs to be positive");
    return readPositiveInt(message);
  }
};

const isNumber = (value) => typeof value === "number" && isNaN(value) === false;
const isInteger = (value) => isNumber(value) && Number.isInteger(value)
const isPositive = (value) => value > 0
const isPositiveInteger = (value) => isInteger(value) && isPositive(value)

exports.runExercise = runExercise;
exports.readNumber = readNumber;
exports.readPositiveNumber = readPositiveNumber;
exports.readInt = readInt;
exports.readPositiveInt = readPositiveInt;
exports.isPositiveInteger = isPositiveInteger;
exports.isNumber = isNumber;