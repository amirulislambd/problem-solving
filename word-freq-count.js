function wordFrequency(sentence) {
  const words = sentence.split(" ");
  let wordsCount ={}
  for (let word of words) {
    let wordLowercase = word.toLowerCase()
      if(wordsCount.hasOwnProperty(wordLowercase)){
        // wordsCount[word]=words[word]+1
        wordsCount[wordLowercase]++
    }else{
        wordsCount[wordLowercase]=1
    }
  }
  return wordsCount
}
const wordCount = wordFrequency("I love JS and I love coding and JS is fun Fun");
console.log(wordCount);
