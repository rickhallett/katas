/**
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). 

*/

// Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

function doTest(a, n) {
//  console.log("A = ", a);
//  console.log("n = ", n);
  assert.strictEqual(findOdd(a), n);
}

describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});

// Implementation

function findOdd(arr) {
  const m = {};
  for (let n of arr) {
      if (m[n] === undefined) m[n] = 0;
      if (m[n] >= 0) m[n]++;    
  }

  for (let p in m) {
      if (m[p] % 2 != 0) return parseInt(p);
  }
}



// Alts

const _findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function __findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });

  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

function ___findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

function ____findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
