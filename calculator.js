function calculator() {
  const message = "Input must be valid number";
  const add = (a, b) =>
    typeof a === "number" && typeof b === "number" ? a + b : message;
  const subtract = (a, b) =>
    typeof a === "number" && typeof b === "number" ? a - b : message;
  const multiply = (a, b) =>
    typeof a === "number" && typeof b === "number" ? a * b : message;
  return { add, subtract, multiply };
}
module.exports = calculator();
