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
