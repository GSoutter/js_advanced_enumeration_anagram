const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('')
}

PangramFinder.prototype.isPangram = function () {
if (this.phrase.length > 0) {
  for (let letter of this.alphabet) {
    if (this.phrase.includes(letter) === false)  {
      return false;
    }
  }
  return true
}
return false
}

module.exports = PangramFinder;
