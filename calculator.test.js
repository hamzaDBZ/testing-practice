const calculator = require("./calculator");

test("add 10 + 5", () => expect(calculator.add(10, 5)).toBe(15));
test("add 100 + 50", () => expect(calculator.add(100, 50)).toBe(150));
test("add 66 + 33", () => expect(calculator.add(66, 33)).toBe(99));
test("add 10 + true", () =>
  expect(calculator.add(10, true)).toBe("Input must be valid number"));
test("add 10 + undefined", () =>
  expect(calculator.add(10, undefined)).toBe("Input must be valid number"));
test("add 10 + Hello", () =>
  expect(calculator.add(10, "Hello")).toBe("Input must be valid number"));

test("subtract 10 - 5", () => expect(calculator.subtract(10, 5)).toBe(5));
test("subtract 100 - 50", () => expect(calculator.subtract(100, 50)).toBe(50));
test("subtract 33 - 66", () => expect(calculator.subtract(33, 66)).toBe(-33));
test("subtract 10 - true", () =>
  expect(calculator.subtract(10, true)).toBe("Input must be valid number"));
test("subtract 10 - undefined", () =>
  expect(calculator.subtract(10, undefined)).toBe(
    "Input must be valid number",
  ));
test("subtract 10 - Hello", () =>
  expect(calculator.subtract(10, "Hello")).toBe("Input must be valid number"));

test("multiply 10 * 5", () => expect(calculator.multiply(10, 5)).toBe(50));
test("multiply 100 * 50", () =>
  expect(calculator.multiply(100, 50)).toBe(5000));
test("multiply -33 * 66", () =>
  expect(calculator.multiply(-33, 66)).toBe(-2178));
test("multiply 10 * true", () =>
  expect(calculator.multiply(10, true)).toBe("Input must be valid number"));
test("multiply 10 * undefined", () =>
  expect(calculator.multiply(10, undefined)).toBe(
    "Input must be valid number",
  ));
test("multiply 10 * Hello", () =>
  expect(calculator.multiply(10, "Hello")).toBe("Input must be valid number"));

test("divide 10 / 5", () => expect(calculator.divide(10, 5)).toBe(2));
test("divide 100 / 50", () => expect(calculator.divide(100, 50)).toBe(2));
test("divide -33 / 66", () => expect(calculator.divide(-33, 66)).toBe(-0.5));
test("divide 10 / true", () =>
  expect(calculator.divide(10, true)).toBe("Input must be valid number"));
test("divide 10 / undefined", () =>
  expect(calculator.divide(10, undefined)).toBe("Input must be valid number"));
test("divide 10 / Hello", () =>
  expect(calculator.divide(10, "Hello")).toBe("Input must be valid number"));
test("divide -33 / 0", () =>
  expect(calculator.divide(-33, 0)).toBe("Cannot divide by Zero"));
