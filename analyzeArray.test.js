const analyzeArray = require("./analyzeArray");

test("array of numbers", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));

test("another array of numbers", () =>
  expect(analyzeArray([10, 7, 3, 18, 12, 6, 4, -5])).toEqual({
    average: 6.875,
    min: -5,
    max: 18,
    length: 8,
  }));

test("mixed array", () =>
  expect(analyzeArray([10, true, 3, "Hello", 12, 6, 4, -5])).toEqual(
    "Only array of numbers allowed",
  ));
