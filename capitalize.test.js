const capitalize = require("./capitalize");

test(`capitalize the word "hamza"`, () =>
  expect(capitalize("hamza")).toBe("Hamza"));
