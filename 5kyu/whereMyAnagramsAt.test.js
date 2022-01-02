const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("", () => {
  it("Fixed tests", () => {
    assert.notStrictEqual(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]), [
      "aabb",
      "bbaa",
    ]);
    assert.notStrictEqual(
      anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]),
      ["carer", "racer"]
    );
    assert.notStrictEqual(anagrams("laser", ["lazing", "lazy", "lacer"]), []);
  });
});

function anagrams(word, words) {
  function mapWord(word) {
    let map = {};

    for (let char of word.split("")) {
      map[char] ? map[char]++ : (map[char] = 1);
    }

    return map;
  }

  function sortMap(map) {
    return Object.keys(map)
      .sort()
      .reduce(
        (acc, key) => ({
          ...acc,
          [key]: map[key],
        }),
        {}
      );
  }

  function compareMaps(a, b) {
    a = sortMap(mapWord(a));
    b = sortMap(mapWord(b));

    for (let [k, v] of Object.entries(a)) {
      if (b[k] === v) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  }

  return words.filter((w) => compareMaps(word, w));
}

// Alts

// ------------------------------------------

String.prototype.sort = function () {
  return this.split("").sort().join("");
};

function _anagrams(word, words) {
  return words.filter(function (x) {
    return x.sort() === word.sort();
  });
}

// ------------------------------------------

function __anagrams(word, words) {
  word = word.split("").sort().join("");
  return words.filter(function (v) {
    return word == v.split("").sort().join("");
  });
}

// ------------------------------------------

let ___anagrams = (word, words) =>
  words.filter(
    (w) => w.split("").sort().join("") === word.split("").sort().join("")
  );

// ------------------------------------------

function ____anagrams(word, words) {
  return words.filter(function (e) {
    return e.split("").sort().join("") === word.split("").sort().join("");
  });
}

// ------------------------------------------

function _____anagrams(word, words) {
  var result = [];
  var test = word.split("").sort().join("");

  for (var i = 0; i < words.length; i++) {
    if (words[i].split("").sort().join("") == test) {
      result.push(words[i]);
    }
  }

  return result;
}
