const IsogramFinder = function (word) {
  this.word = word.toUpperCase().split('')
}

IsogramFinder.prototype.isIsogram = function () {

  unique_letters = Array.from(new Set(this.word))
  if (this.word.length === unique_letters.length) {
    return true;
  }
  return false;
}

module.exports = IsogramFinder;
