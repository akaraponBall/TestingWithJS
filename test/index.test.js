const power = require("../index");
const assert = require("assert");

it("Positive base, degree = 0", () => {
  let result = power(2, 0);
  assert.equal(result, 1);
});

it("Positive base, degree = 1", () => {
  let result = power(5, 1);
  assert.equal(result, 5);
});

it("Positive base, degree = 5", () => {
  let result = power(5, 5);
  assert.equal(result, 3125);
});

it("Positive base, degree = -5", () => {
  let result = power(5, -5);
  assert.equal(result, -1);
});

it("Negative base", () => {
  let result = power(-10, 3);
  assert.equal(result, -1000);
});

it("base = 0", () => {
  let result = power(0, 3);
  assert.equal(result, 0);
});

it("base = 2147483647", () => {
  let result = power(2147483647, 1);
  assert.equal(result, 2147483647);
});

it("base = -2147483647", () => {
  let result = power(-2147483647, 1);
  assert.equal(result, -2147483647);
});

it("base = 1, degree = -2147483647", () => {
  let result = power(1, -2147483647);
  assert.equal(result, -1);
});

it("base = 1, degree = 2147483647", () => {
  let result = power(1, 2147483647);
  assert.equal(result, 1);
});
