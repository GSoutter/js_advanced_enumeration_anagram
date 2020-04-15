const AnagramFinder = function (word) {
  this.wordFull = word.toUpperCase() //required for same word test. Didn't work otherwise
  this.word = word.toUpperCase().split('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let isAnagram;
  let anagramWords = [] //blank array for storing confirmed anagrams

  for (let oWord of otherWords){//running through words

    isAnagram = true;

    if (oWord.toUpperCase() === this.wordFull){isAnagram = false; continue}; //test for same word
    if (oWord.length === 0){isAnagram = false; continue}; // test for blank

    let oWordSplit = oWord.toUpperCase().split(''); //spliting word and uppercase to remove issue of different case

    for (letter of oWordSplit){ //runs through letters checking if number of letters is same. if not no anagram

      let oLetterNum = oWordSplit.filter(let => let == letter);
      let letterNum = this.word.filter(let => let == letter);

      if (oLetterNum.length !== letterNum.length){isAnagram = false}; //different number of same letter.
    }

    if (isAnagram === true){anagramWords.push(oWord)} //all tests passed. word pushed to array.
  }
  return anagramWords;
}

module.exports = AnagramFinder;
