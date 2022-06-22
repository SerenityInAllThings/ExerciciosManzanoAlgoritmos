const {
  runExercise,
  readNumber,
  readPositiveNumber,
  readPositiveInt,
} = require("../utils");
const prompt = require("prompt-sync")({});

const convertCelsiusToFahrenreit = (celsius) => {
  const fahrenheit = (9 * celsius + 160) / 5;
  return fahrenheit;
};

const convertFahrenreitToCelsius = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
};

const getCilinderVolume = (radius, height) => {
  return Math.PI * Math.pow(radius, 2) * height;
};

runExercise("3.9 A", () => {
  const celsiusTemp = readNumber("Enter celsius temperature");
  const convertedF = convertCelsiusToFahrenreit(celsiusTemp);
  console.log(`${celsiusTemp}ºC is ${convertedF}ºF`);
  console.log();
});

runExercise("3.9 B", () => {
  const fahrenheitTemp = readNumber("Enter fahrenreit temperature");
  const convertedC = convertFahrenreitToCelsius(fahrenheitTemp);
  console.log(`${fahrenheitTemp}ºF is ${convertedC}ºC`);
  console.log();
});

runExercise("3.9 C", () => {
  const radius = readPositiveNumber("Enter cilinder radius");
  const height = readPositiveNumber("Enter cilinder height");
  const volume = getCilinderVolume(radius, height);
  console.log(`Total volume: ${volume}`);
});

runExercise("3.9 D", () => {
  const time = readPositiveNumber("Enter travel time");
  const speed = readPositiveNumber("Enter average travel speed");
  const distance = time * speed;
  const litersUsed = distance / 12;
  console.log("time", time);
  console.log("speed", speed);
  console.log("distance", distance);
  console.log("liters used", litersUsed);
});

runExercise("3.9 E", () => {
  const value = readPositiveNumber("Enter value");
  const tax = readPositiveNumber("Enter tax");
  const time = readPositiveNumber("Enter time");
  const monthly = value + ((value * tax) / 100) * time;
  console.log("monthly", monthly);
});

runExercise("3.9 F", () => {
  let a = prompt("Enter A ");
  let b = prompt("Enter B ");
  let c = b;
  b = a;
  a = c;
  console.log(`Original A: ${b}, Original B: ${a}`);
  console.log(`Inverted A: ${a}, Inverted B: ${b}`);
});

runExercise("3.9 G", () => {
  const a = readPositiveInt("Enter A");
  const b = readPositiveInt("Enter B");
  const c = readPositiveInt("Enter C");
  const d = readPositiveInt("Enter D");
  console.log(a * b);
  console.log(a * c);
  console.log(a * d);
  console.log(b * c);
  console.log(b * d);
  console.log(c * d);

  console.log(a + b);
  console.log(a + c);
  console.log(a + d);
  console.log(b + c);
  console.log(b + d);
  console.log(c + d);
});

runExercise("3.9 H", () => {
  const width = readPositiveNumber("Enter width");
  const height = readPositiveNumber("Enter height");
  const depth = readPositiveNumber("Enter depth");
  const volume = width * height * depth;
  console.log("volume", volume);
});

runExercise("3.9 I", () => {
  const a = readNumber("Enter A");
  const b = readNumber("Enter B");
  const squaredDifference = Math.pow(a - b, 2);
  console.log("squaredDifference", squaredDifference);
});

runExercise("3.9 J", () => {
  const dolarAmount = readPositiveNumber("Enter dollar amount");
  const realWorth = readPositiveInt("How much is a Real worth?");
  const brlAmount = dolarAmount * realWorth;
  console.log("brlAmount", brlAmount);
});

runExercise("3.9 K", () => {
  const brlAmount = readPositiveNumber("Enter BRL amount");
  const dolarWorth = readPositiveInt("How much is a Dollar worth?");
  const dolarAmount = brlAmount * dolarWorth;
  console.log("dolarAmount", dolarAmount);
});

runExercise("3.9 L", () => {
  const a = readPositiveInt("Enter first value");
  const b = readPositiveInt("Enter second value");
  const c = readPositiveInt("Enter third value");
  const result = a ** 2 + b ** 2 + c ** 2;
  console.log("result", result);
});

runExercise("3.9 M", () => {
  const a = readPositiveInt("Enter first value");
  const b = readPositiveInt("Enter second value");
  const c = readPositiveInt("Enter third value");
  const result = (a + b + c) ** 2;
  console.log("result", result);
});
