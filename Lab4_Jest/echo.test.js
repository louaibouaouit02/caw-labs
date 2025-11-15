const { exf } = require("./echo");

test("exf prints the string n times", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  exf("echo", 3);

  expect(consoleSpy).toHaveBeenCalledTimes(3);
  expect(consoleSpy).toHaveBeenCalledWith("echo");

  consoleSpy.mockRestore();
});
