// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (!encode) {
      shift = -shift;
    }
    let result = "";
    let count = 0;
    const inputSmallLetters = input.toLowerCase();
    for (let i = 0; i < inputSmallLetters.length; i++) {
      if (
        inputSmallLetters[i] !== " " &&
        inputSmallLetters[i].charCodeAt() >= 97 &&
        inputSmallLetters[i].charCodeAt() <= 122
      ) {
        count = inputSmallLetters[i].charCodeAt() + shift;
        if (count > 122) {
          count = count - 122 + 96;
          result += String.fromCharCode(count);
        } else if (count < 97) {
          count += 26;
          result += String.fromCharCode(count);
        } else {
          result += String.fromCharCode(count);
        }
      } else {
        result += inputSmallLetters[i];
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
