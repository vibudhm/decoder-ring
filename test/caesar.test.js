// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("return encoded string", () => {
    const input = "thinkful";
    const shift = 3;
    const actual = caesar(input, shift, true);
    const expected = "wklqnixo";

    expect(actual).to.equal(expected);
  });

  it("return encoded string where shift is negative", () => {
    const input = "thinkful";
    const shift = -3;
    const actual = caesar(input, shift, true);
    const expected = "qefkhcri";

    expect(actual).to.equal(expected);
  });

  it("return decoded string", () => {
    const input = "wklqnixo";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "thinkful";

    expect(actual).to.equal(expected);
  });

  it("return encoded string that has spaces", () => {
    const input = "This is a secret message!";
    const shift = 8;
    const actual = caesar(input, shift, true);
    const expected = "bpqa qa i amkzmb umaaiom!";

    expect(actual).to.equal(expected);
  });

  it("return false where shift value is provided", () => {
    const input = "anything";
    const actual = caesar(input);

    expect(actual).to.be.false;
  });
});
