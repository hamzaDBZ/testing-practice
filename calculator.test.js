const calculator = require("./calculator");

test("add 10 + 5", () => expect(calculator.add(10, 5)).toBe(15));
