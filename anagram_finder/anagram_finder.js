const AnagramFinder = function (word) {
  this.wordFull = word.toUpperCase()

  this.word = word.toUpperCase().split('')


}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let isAnagram;
  let anagramWords = []
  for (let oWord of otherWords){

    isAnagram = true;

    if (oWord.toUpperCase() === this.wordFull){
      isAnagram = false;
    };

    if (oWord.length === 0){
      isAnagram = false;
    };

    let oWordSplit = oWord.toUpperCase().split('');


    for (letter of oWordSplit){

      let oLetterNum = oWordSplit.filter(let => let == letter);
      let letterNum = this.word.filter(let => let == letter);

      if (oLetterNum.length === letterNum.length){
        continue;
      }else{
        isAnagram = false;
      }
    }
    if (isAnagram === true){
      anagramWords.push(oWord)
    }


  }
  return anagramWords;
}

module.exports = AnagramFinder;
