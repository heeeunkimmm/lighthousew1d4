var words = ["ground", "control", "to", "major", "tom"];

function newMap(words, cb) {
  var result = [];
  for (var i = 0; i < words.length; i++) {
    result.push(cb(words[i]));
  }
  return result;
};

var newWords = newMap(words, function(words) {
  return words.length;
});

console.log(newWords)



