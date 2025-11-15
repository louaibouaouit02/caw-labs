const { mean } = require("./notation");

test("fileImport correctly uses mean() with scores1", () => {
  const scores1 = [90, 85, 88, 92, 87];
  expect(mean(scores1)).toBe(88.4);
});

test("fileImport correctly uses mean() with scores2", () => {
  const scores2 = [70, 75, 80];
  expect(mean(scores2)).toBe(75);
});

test("fileImport handles empty arrays", () => {
  expect(mean([])).toBe(0);
});
