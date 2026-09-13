function make_capital(sentence) {
  let word = sentence.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  let newSentence = word.join(" ");
  return newSentence;
}

console.log(make_capital("you are my sunshine"));








