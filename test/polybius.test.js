// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("return encoded string", () => {
    const input = "thinkful";
    const actual = polybius(input);
    const expected = "4432423352125413";

    expect(actual).to.equal(expected);
  });

  it("return encoded string where input has a space", () => {
    const input = "Hello world";
    const actual = polybius(input);
    const expected = "3251131343 2543241341";

    expect(actual).to.equal(expected);
  });

  it("return decoded string", () => {
    const input = "3251131343 2543241341";
    const actual = polybius(input, false);
    const expected = "hello world";

    expect(actual).to.equal(expected);
  });

  it("return false test", () => {
    const input = "44324233521254134";
    const actual = polybius(input, false);

    expect(actual).to.be.false;
  });
});
