function calculator() {
  const message = "Input must be valid number";
  const add = (a, b) =>
    typeof a === "number" && typeof b === "number" ? a + b : message;
  const subtract = (a, b) =>
    typeof a === "number" && typeof b === "number" ? a - b : message;
  const multiply = (a, b) =>
    typeof a === "number" && typeof b === "number" ? a * b : message;
  const divide = (a, b) =>
    typeof a === "number" && typeof b === "number"
      ? b === 0
        ? "Cannot divide by Zero"
        : a / b
      : message;
  return { add, subtract, multiply, divide };
}
module.exports = calculator();
