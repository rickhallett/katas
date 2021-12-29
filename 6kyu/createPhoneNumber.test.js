/**

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

*/

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});

// Implementation

const createPhoneNumber = (arr) => `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6, 10).join('')}`;

// Alts

function _createPhoneNumber(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

function __createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}

function ___createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

function ____createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";

  for(var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}
