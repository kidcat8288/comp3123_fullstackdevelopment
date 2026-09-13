function make_capital(sentence) {
  let word = sentence.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  let newSentence = word.join(" ");
  return newSentence;
}

console.log(make_capital("you are my sunshine"));






function max(num1, num2, num3) {
  let largest_number = num1;

  if (num2 > largest_number) {
    largest_number = num2;
  }
  if (num3 > largest_number) {
    largest_number = num3;
  }
  return largest_number;
}
console.log(max(100, 50, 80));





function right(string) {
  if (string.length < 3) {
    return string;
  }

  let last_3 = string.substr(-3);
  let rest = string.slice(0, -3);

  let new_string = last_3 + rest;

  return new_string;
}


console.log(right("school"))