const {
  runExercise,
  readPositiveInt,
  readPositiveNumber,
} = require("../utils");

runExercise("3.10 A", () => {
  const a = readPositiveInt("Enter A");
  const b = readPositiveInt("Enter B");
  const c = readPositiveInt("Enter C");
  const d = readPositiveInt("Enter D");
  const product = a * c;
  const sum = b + d;
  console.log("product", product);
  console.log("sum", sum);
});

runExercise("3.10 B", () => {
  const income = readPositiveNumber("Enter income");
  const raise = readPositiveNumber("Enter raise");
  const newIncome = income + raise;
  console.log("new income", newIncome);
});

runExercise("3.10 C", () => {
  const votesForA = readPositiveInt("Enter total valid votes for A");
  const votesForB = readPositiveInt("Enter total valid votes for B");
  const votesForC = readPositiveInt("Enter total valid votes for C");
  const nullVotes = readPositiveInt("Enter total null votes");
  const invalidVotes = readPositiveInt("Enter total invalid votes");
  const totalValid = votesForA + votesForB + votesForC;
  const totalVotes = totalValid + nullVotes + invalidVotes;
  const aPercentage = (votesForA * 100) / totalValid;
  const bPercentage = (votesForB * 100) / totalValid;
  const cPercentage = (votesForC * 100) / totalValid;
  const nullPercentage = (nullVotes * 100) / totalVotes;
  const invalidPercentage = (invalidVotes * 100) / totalVotes;
  console.log(`A\t${aPercentage.toFixed(2)}%`);
  console.log(`B\t${bPercentage.toFixed(2)}%`);
  console.log(`C\t${cPercentage.toFixed(2)}%`);
  console.log(`Null votes\t${nullPercentage}%`);
  console.log(`Invalid votes\t${invalidPercentage}%`);
});
