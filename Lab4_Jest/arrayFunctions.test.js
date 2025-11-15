const { first, last, concatenate, chunk } = require("./arrayFunctions");

// --- Tests for first() ---
test("first() returns first n elements", () => {
    expect(first([1,2,3,4,5], 3)).toEqual([1,2,3]);
});

test("first() returns first element if n is null", () => {
    expect(first([1,2,3])).toBe(1);
});

test("first() returns empty array for null array or n <= 0", () => {
    expect(first(null, 2)).toEqual([]);
    expect(first([1,2,3], 0)).toEqual([]);
});

// --- Tests for last() ---
test("last() returns last n elements", () => {
    expect(last([1,2,3,4,5], 2)).toEqual([4,5]);
});

test("last() returns last element if n is null", () => {
    expect(last([1,2,3])).toBe(3);
});

test("last() returns empty array for null array", () => {
    expect(last(null, 3)).toEqual([]);
});

// --- Tests for concatenate() ---
test("concatenate() joins array without separator", () => {
    expect(concatenate(["Red","Green","White","Black"])).toBe("RedGreenWhiteBlack");
});

test("concatenate() joins array with comma", () => {
    expect(concatenate(["Red","Green","White","Black"], ",")).toBe("Red,Green,White,Black");
});

// --- Tests for chunk() ---
test("chunk() splits array into subarrays of size 2", () => {
    expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
});

test("chunk() splits array into subarrays of size 3", () => {
    expect(chunk([1,2,3,4,5,6,7], 3)).toEqual([[1,2,3],[4,5,6],[7]]);
});
