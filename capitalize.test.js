const capitalize = require("./capitalize");

test(`capitalize the word "hamza"`, () =>
  expect(capitalize("hamza")).toBe("Hamza"));

test(`capitalize the word "coding"`, () =>
  expect(capitalize("coding")).toBe("Coding"));

test(`capitalize the word "odin"`, () =>
  expect(capitalize("odin")).toBe("odin"));
