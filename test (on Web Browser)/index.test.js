// const power = require("../index");
// const assert = require("assert");

let assert = chai.assert;

describe("power function", () => {
  describe("Positive base", () => {
    it("Degree = 0", () => {
      let result = power(2, 0);
      assert.equal(result, 1);
    });
    it("Degree = 1", () => {
      let result = power(5, 1);
      assert.equal(result, 5);
    });

    it("Degree = 5", () => {
      let result = power(5, 5);
      assert.equal(result, 3125);
    });

    it("Degree = -5", () => {
      let result = power(5, -5);
      assert.equal(result, -1);
    });
  });

  describe("Base = 1", () => {
    it("Degree = -2147483647", () => {
      let result = power(1, -2147483647);
      assert.equal(result, -1);
    });

    it("Degree = 2147483647", () => {
      let result = power(1, 2147483647);
      assert.equal(result, 1);
    });
  });

  describe("Base is big numbers", () => {
    it("base = 2147483647", () => {
      let result = power(2147483647, 1);
      assert.equal(result, 2147483647);
    });

    it("base = -2147483647", () => {
      let result = power(-2147483647, 1);
      assert.equal(result, -2147483647);
    });
  });

  describe("Negative Base", () => {
    it("Base = -10, degree = 3", () => {
      let result = power(-10, 3);
      assert.equal(result, -1000);
    });
  });

  describe("Base = 0", () => {
    it("base = 0, degree = 3", () => {
      let result = power(0, 3);
      assert.equal(result, 0);
    });
  });
});
