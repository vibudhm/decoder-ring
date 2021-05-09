// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // Check the validity of alphabet
  const alphabetValidity = function isAlphabetValid(alphabet) {
    if (!alphabet) return false;
    let alphabetArray = alphabet.split("");
    if (alphabetArray.length !== 26) {
      return false;
    }
    for (let alph of alphabet) {
      let alphLength = alphabetArray.filter((element) => element === alph);
      if (alphLength.length > 1) {
        return false;
      }
    }
    return true;
  };

  // Adding letters for retrieving the position
  const lettersArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // Returns the index of the input letter
  const indexOfInputLetter = function (letter) {
    const findIndex = lettersArray.indexOf(
      lettersArray.find((character) => character === letter)
    );
    return findIndex;
  };

  function substitution(input, alphabet, encode = true) {
    // check if there is an input
    if (!input) return false;

    // check the validity of the alphabet
    if (!alphabetValidity(alphabet)) {
      return false;
    }

    // Defining parameters to convert string into array and lowercase
    let inputLower = input.toLowerCase();
    let inputArray = inputLower.split("");
    let alphabetArray = alphabet.split("");

    let result = "";

    // Encoding
    if (encode) {
      for (let letter of inputArray) {
        if (letter === " ") {
          result += letter;
        } else {
          let letterIndex = indexOfInputLetter(letter);
          result += alphabetArray[letterIndex];
        }
      }
      return result;
    }

    // Decoding
    if (!encode) {
      for (let letter of inputArray) {
        if (letter === " ") {
          result += letter;
        } else {
          let letterIndex = alphabetArray.indexOf(
            inputArray.find((character) => character === letter)
          );
          result += lettersArray[letterIndex];
        }
      }
      return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
