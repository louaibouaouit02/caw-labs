
const { mean } = require("./notation");

test("mean calculates the correct average for an array", () => {
  expect(mean([90, 85, 88, 92, 87])).toBe(88.4);
});

test("mean works for small arrays", () => {
  expect(mean([70, 75, 80])).toBe(75);
});

test("mean returns 0 for an empty array", () => {
  expect(mean([])).toBe(0);
});

test("mean returns 0 when input is not an array", () => {
  expect(mean("not an array")).toBe(0);
});
