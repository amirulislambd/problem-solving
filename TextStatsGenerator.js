function textStats(texts) {
  let text = texts.split(" ").join("").toLowerCase();
  const characters = text.length;
  const textsArr = texts.split(" ");
  const words = textsArr.length;
  let hasVowel = "aeiou";
  let vowels = 0;
  let consonants = 0;
  for (let vowel of text) {
    if (hasVowel.includes(vowel)) {
      vowels++;
    } else {
      consonants++;
    }
  }
  // for(let i = 0; i<texts.length;i++){
  // console.log(texts[i].split(' '))
  // }
  return {
    characters: characters,
    words,
    vowels,
    consonants,
  };
}
const result = textStats("I am OK");
console.log(result);
